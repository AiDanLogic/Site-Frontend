import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  // Responsive sizing and spacing
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>(
    typeof window === 'undefined' ? 'desktop' : window.innerWidth < 480 ? 'mobile' : window.innerWidth < 768 ? 'tablet' : 'desktop'
  );

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setViewport(w < 480 ? 'mobile' : w < 768 ? 'tablet' : 'desktop');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const effectiveWidth = viewport === 'mobile' ? Math.min(350, width * 0.65) : viewport === 'tablet' ? Math.min(420, width * 0.8) : width;
  const effectiveHeight = viewport === 'mobile' ? Math.min(280, height * 0.65) : viewport === 'tablet' ? Math.min(340, height * 0.8) : height;
  const effectiveCardDistance = viewport === 'mobile' ? 40 : viewport === 'tablet' ? 50 : cardDistance;
  const effectiveVerticalDistance = viewport === 'mobile' ? 50 : viewport === 'tablet' ? 60 : verticalDistance;
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, effectiveCardDistance, effectiveVerticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
          rest.forEach((idx, i) => {
        const el = refs[idx].current;
            const slot = makeSlot(i, effectiveCardDistance, effectiveVerticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

          const backSlot = makeSlot(refs.length - 1, effectiveCardDistance, effectiveVerticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [effectiveCardDistance, effectiveVerticalDistance, delay, pauseOnHover, skewAmount, easing, viewport]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width: effectiveWidth, height: effectiveHeight, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div
      ref={container}
      className="overflow-visible perspective-[900px]"
      style={{
        width: effectiveWidth,
        height: effectiveHeight,
        ...(viewport === 'mobile' 
          ? {
              position: 'relative',
              margin: '0 auto',
              transform: 'scale(0.8)',
              transformOrigin: 'center center'
            }
          : viewport === 'tablet'
          ? {
              position: 'relative',
              margin: '0 auto',
              transform: 'scale(0.9)',
              transformOrigin: 'center center'
            }
          : {
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(-15%, 10%)',
              transformOrigin: 'bottom right'
            })
      }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;

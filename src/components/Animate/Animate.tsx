import { useEffect, useState, PropsWithChildren } from "react";

type Props = {
  show: boolean;
  animateIn?: string;
  animateOut?: string;
}

export const Animate = ({ show, children, animateIn = "fadeIn", animateOut = "fadeOut" }: PropsWithChildren<Props>) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    show && setRender(show);
  }, [show]);

  const handleAnimationEnd = () => {
    !show && setRender(false);
  };

  return (
    <>
      {render && (
        <div className={!show ? animateOut : animateIn} onAnimationEnd={handleAnimationEnd}>
          {children}
        </div>
      )}
    </>
  );
};
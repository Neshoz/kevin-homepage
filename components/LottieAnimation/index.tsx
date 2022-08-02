import Lottie, { Options } from "react-lottie";

const DEFAULT_SIZE = 350;
const DEFAULT_SPEED = 1;

interface LottieAnimationProps {
  size?: number;
  animation: Options["animationData"];
  speed?: number;
  loop?: boolean;
}

export const LottieAnimation = ({
  size = DEFAULT_SIZE,
  speed = DEFAULT_SPEED,
  loop = true,
  animation,
}: LottieAnimationProps) => {
  const options: Options = {
    animationData: animation,
    autoplay: true,
    loop: loop,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      style={{
        padding: 0,
        margin: 0,
        cursor: "default",
        width: size,
        height: size,
      }}
      isClickToPauseDisabled={true}
      options={options}
      speed={speed}
    />
  );
};

import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}
const Image = ({ src, ...rest }: ImageProps) => {
  return <img src={src} {...rest} />;
};

export default Image;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const DownArrow: React.FC<IconSvgProps> = ({
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 10L12 14L17 10"
      stroke="#314660"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CirclePerson: React.FC<IconSvgProps> = ({
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488"
      stroke="#314660"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle
      cx="3"
      cy="3"
      r="3"
      transform="matrix(1 0 0 -1 9 12)"
      stroke="#314660"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeIcon: React.FC<IconSvgProps> = ({
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M12.5 11V17M15.5 14H9.5M16.6804 22H8.31965C6.0109 22 4.1393 20.214 4.1393 18.0108V13.133C4.1393 12.4248 3.84447 11.7456 3.31969 11.2448C2.10381 10.0845 2.26187 8.16205 3.65251 7.19692L10.0412 2.763C11.5071 1.74567 13.4929 1.74567 14.9588 2.763L21.3475 7.19691C22.7381 8.16205 22.8962 10.0845 21.6803 11.2448C21.1555 11.7456 20.8607 12.4248 20.8607 13.133V18.0108C20.8607 20.214 18.9891 22 16.6804 22Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

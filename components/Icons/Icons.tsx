
export enum IconSizes {
    XXS,
    XS,
    S,
    XMD,
    MD,
    L,
    XL,
    XXL,
    XXXXXL,
  }
  
  const sizes: Record<IconSizes, number> = {
    [IconSizes.XXS]: 12,
    [IconSizes.XS]: 16,
    [IconSizes.S]: 20,
    [IconSizes.MD]: 24,
    [IconSizes.XMD]: 28, // Not sure what to call this as MD and L is taken
    [IconSizes.L]: 32,
    [IconSizes.XL]: 40,
    [IconSizes.XXL]: 56,
    [IconSizes.XXXXXL]: 88,
  }
  
  export type SvgProps = {
    size?: IconSizes
    className?: string
    color?: string
    fillOpacity?: string
    style?: object
  }
  
  function getSize(size?: IconSizes) {
    return size ? sizes[size] : sizes[IconSizes.S]
  }

  export const NudgeIcon = ({
    size,
    className,
    color,
    fillOpacity,
    style,
  }: SvgProps) => {
    <svg
      width="538"
      height="160"
      viewBox="0 0 538 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231.617 128.179C211.058 128.179 199.438 111.732 199.438 89.5643C199.438 56.8491 218.745 32.5363 243.773 32.5363C260.935 32.5363 268.98 42.5475 272.555 50.7708L276.309 33.4301L283.46 0H314.566L287.929 125.14H257.36L259.684 113.698C254.142 120.849 244.31 128.179 231.617 128.179ZM246.633 106.19C259.505 106.19 267.728 88.8489 267.728 73.1173C267.728 60.6034 262.902 54.3463 253.069 54.3463C240.376 54.3463 231.974 71.5084 231.974 87.24C231.974 99.5754 236.98 106.19 246.633 106.19ZM0.872437 125.14H32.3361V78.8379C32.3361 70.6145 33.5875 56.6703 46.8166 56.6703C54.146 56.6703 58.9731 61.1396 58.9731 70.9719V125.14H90.4368V65.0725C90.4368 45.0503 80.783 32.5363 60.582 32.5363C45.3865 32.5363 35.5539 41.8325 31.2635 49.5196V35.3965H0.872437V125.14ZM102.29 95.8211C102.29 116.38 114.446 128.179 130.893 128.179C147.34 128.179 156.279 118.168 160.39 111.553V125.14H191.139V35.3965H159.675V82.771C159.675 94.5699 155.385 103.866 145.373 103.866C138.58 103.866 133.753 99.5754 133.753 89.5643V35.3965H102.29V95.8211ZM330.073 160H377.448C396.756 160 409.985 149.274 409.985 131.754C409.985 117.095 398.363 104.402 377.268 104.402H337.045C332.219 104.402 328.643 103.687 328.643 99.9328C328.643 97.2512 330.252 95.4638 333.828 93.8545C339.012 96.1788 345.984 97.43 353.851 97.43C377.448 97.43 391.036 85.2738 393.715 69.0056L394.251 67.0391C395.326 59.7096 396.933 58.1007 401.759 58.1007H413.558V35.3965H406.05C395.862 35.3965 391.391 38.0782 390.319 51.1285C384.063 39.687 370.476 32.5363 352.957 32.5363C329.537 32.5363 311.302 44.6926 311.302 65.7878C311.302 74.5474 315.235 82.2345 320.956 86.8827C312.375 91.3517 305.939 98.5027 305.939 107.263C305.939 115.307 309.336 120.313 315.414 123.888C309.157 127.464 304.152 133.899 304.152 141.765C304.152 153.207 312.554 160 330.073 160ZM366.721 65.7878C366.721 75.0839 361.179 80.2679 353.315 80.2679C345.448 80.2679 340.263 75.0839 340.263 65.7878C340.263 56.4914 345.448 50.9497 353.315 50.9497C361.179 50.9497 366.721 56.4914 366.721 65.7878ZM370.834 139.441H336.509C331.146 139.441 328.107 136.76 328.107 132.111C328.107 129.251 329.894 126.57 331.861 125.14H370.834C377.448 125.14 380.128 128.357 380.128 132.111C380.128 136.581 377.448 139.441 370.834 139.441ZM457.03 128.179C427.713 128.179 409.477 109.944 409.477 79.9106C409.477 51.8436 429.32 32.5363 456.85 32.5363C489.386 32.5363 505.833 55.5979 502.796 86.8827H440.406C440.761 100.648 447.556 106.369 457.03 106.369C466.863 106.369 471.867 100.112 475.085 92.4245L503.509 101.542C497.611 114.95 484.741 128.179 457.03 128.179ZM441.119 69.0056H472.403C471.867 58.9945 466.147 53.0948 457.03 53.0948C448.092 53.0948 442.371 58.458 441.119 69.0056ZM513.467 53.68V66.4576H537.127V15.6576V0H521.47H470.67V23.6603H483.446C492.65 23.6603 501.832 22.7473 510.858 20.9346L517.535 19.5933L516.192 26.2704C514.379 35.2946 513.467 44.4758 513.467 53.68Z"
        fill="black"
      />
    </svg>;
  };
import { ButtonHTMLAttributes } from "react";

import classes from "./Button.module.scss";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" className={[classes.button].join(" ")} {...props}>
      <svg
        className={classes.svg}
        viewBox="0 0 457 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M75.5139 24.6632C77.0884 24.6632 79.5308 24.5979 80.917 25.368C82.4089 26.1968 85.4618 25.6029 86.9987 25.6029C89.9046 25.6029 92.8106 25.6029 95.7166 25.6029C114.64 25.6029 133.564 25.6029 152.488 25.6029C197.339 25.6029 242.191 25.6029 287.042 25.6029C306.105 25.6029 325.168 25.6029 344.231 25.6029C352.418 25.6029 360.605 25.6029 368.792 25.6029C371.542 25.6029 374.291 25.6029 377.041 25.6029C377.919 25.6029 378.798 25.6029 379.677 25.6029C379.797 25.6029 377.83 25.6029 378.554 25.6029"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M75.0441 67.8876H379.494"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M54.3328 21.8627C52.9436 21.8627 51.9036 21.9177 50.8483 22.7619C50.3382 23.17 50.1714 23.5262 49.7118 23.9859C49.3142 24.3834 49.1893 25.393 48.825 25.6844C48.194 26.1892 48.3246 29.0525 48.5003 29.8433C48.8296 31.3249 50.0759 32.3117 51.2979 32.9906C53.2986 34.1021 56.898 35.5598 59.2785 34.5018C60.4404 33.9854 61.8391 34.1729 62.6007 32.8782C62.8255 32.4959 63.504 31.6944 63.5498 31.3045C63.6301 30.6226 64.4129 29.8961 64.4491 29.2813C64.527 27.9556 64.6739 26.552 64.6739 25.1224C64.6739 24.373 64.6739 23.6237 64.6739 22.8743C64.6739 21.9628 64.1979 21.6879 64.0119 20.8511C63.9079 20.3828 63.3653 19.467 62.9878 19.165C62.4834 18.7615 62.3501 17.9464 61.9762 17.479C61.381 16.735 60.5254 15.4064 59.6282 14.8937C58.5604 14.2835 57.6836 13.5354 56.5809 13.0453C55.1322 12.4015 53.6315 12.4817 52.1347 12.0212C50.5522 11.5343 48.2 11.9712 46.5145 11.9712C45.602 11.9712 44.0436 13.0537 43.3672 13.5948C42.2932 14.4541 41.2356 15.4268 40.2949 16.3674C39.9014 16.761 39.557 17.4151 39.2708 17.9161C38.9788 18.427 38.2719 19.2199 38.1592 19.727C37.8151 21.2755 36.7979 22.7675 36.7979 24.3356C36.7979 26.1693 36.6436 28.0811 37.0352 29.8433C37.2366 30.7494 38.299 33.5386 39.046 34.0522C39.8143 34.5804 40.3783 36.1931 41.0692 36.9247C41.5313 37.4139 42.2693 38.3654 42.5929 38.948C43.4203 40.4373 45.0121 41.3619 45.8401 42.7697C46.5459 43.9695 48.151 44.556 49.1123 45.5173C51.2994 47.7044 55.2336 49.289 58.2794 49.289C59.5696 49.289 61.4821 49.0733 62.201 47.8153C62.7585 46.8396 64.4491 45.7152 64.4491 44.4557C64.4491 43.4029 65.5535 41.6044 64.6239 40.5716C63.7905 39.6455 62.2998 38.7951 61.077 38.7231C59.8917 38.6534 57.4523 38.3973 57.2553 40.072C57.2123 40.4369 56.8057 40.4825 56.8057 40.9712C56.8057 41.3437 56.7838 41.7235 56.8057 42.0952C56.8601 43.0206 57.8525 42.868 58.3793 43.2193"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M38.8212 37.1495C38.8212 38.9098 38.1206 41.3666 37.2475 42.8945C36.5153 44.176 35.093 46.9077 33.5382 47.2533C32.6892 47.4419 31.9391 48.2738 30.953 48.3898C30.7371 48.4152 30.0593 48.787 29.8289 48.8893C29.3114 49.1194 28.7524 48.9048 28.2553 49.1142C25.9221 50.0966 23.9796 48.5959 22.1855 47.5405C21.0373 46.8651 19.3682 44.9922 19.0258 43.7937C18.8932 43.3299 17.8865 41.4615 17.4771 42.8945C17.2781 43.591 16.0095 45.0855 15.3414 45.4673C15.1168 45.5956 14.6839 46.1249 14.4922 46.3166C14.1609 46.6479 13.782 46.9669 13.4681 47.3157C12.6613 48.2121 11.5821 48.5995 10.4956 49.1142C8.49608 50.0613 6.45219 49.9634 4.20105 49.9634"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M54.3328 78.0699C52.9436 78.0699 51.9036 78.0149 50.8483 77.1707C50.3382 76.7626 50.1714 76.4064 49.7118 75.9468C49.3142 75.5492 49.1893 74.5396 48.825 74.2482C48.194 73.7434 48.3246 70.8801 48.5003 70.0893C48.8296 68.6078 50.0759 67.6209 51.2979 66.942C53.2986 65.8305 56.898 64.3728 59.2785 65.4308C60.4404 65.9472 61.8391 65.7597 62.6007 67.0544C62.8255 67.4367 63.504 68.2382 63.5498 68.6281C63.6301 69.31 64.4129 70.0365 64.4491 70.6513C64.527 71.9771 64.6739 73.3806 64.6739 74.8102C64.6739 75.5596 64.6739 76.3089 64.6739 77.0583C64.6739 77.9698 64.1979 78.2447 64.0119 79.0816C63.9079 79.5498 63.3653 80.4656 62.9878 80.7676C62.4834 81.1711 62.3501 81.9862 61.9762 82.4536C61.381 83.1976 60.5254 84.5263 59.6282 85.0389C58.5604 85.6491 57.6836 86.3972 56.5809 86.8873C55.1322 87.5311 53.6315 87.4509 52.1347 87.9114C50.5522 88.3984 48.2 87.9614 46.5145 87.9614C45.602 87.9614 44.0436 86.8789 43.3672 86.3378C42.2932 85.4785 41.2356 84.5059 40.2949 83.5652C39.9014 83.1717 39.557 82.5175 39.2708 82.0165C38.9788 81.5056 38.2719 80.7127 38.1592 80.2056C37.8151 78.6571 36.7979 77.1651 36.7979 75.5971C36.7979 73.7633 36.6436 71.8515 37.0352 70.0893C37.2366 69.1832 38.299 66.394 39.046 65.8804C39.8143 65.3523 40.3783 63.7395 41.0692 63.0079C41.5313 62.5187 42.2693 61.5672 42.5929 60.9847C43.4203 59.4953 45.0121 58.5707 45.8401 57.163C46.5459 55.9631 48.151 55.3766 49.1123 54.4153C51.2994 52.2282 55.2336 50.6436 58.2794 50.6436C59.5696 50.6436 61.4821 50.8593 62.201 52.1173C62.7585 53.093 64.4491 54.2174 64.4491 55.4769C64.4491 56.5297 65.5535 58.3282 64.6239 59.3611C63.7905 60.2871 62.2998 61.1375 61.077 61.2095C59.8917 61.2792 57.4523 61.5353 57.2553 59.8606C57.2123 59.4957 56.8057 59.4502 56.8057 58.9614C56.8057 58.5889 56.7838 58.2091 56.8057 57.8374C56.8601 56.912 57.8525 57.0646 58.3793 56.7134"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M38.8212 62.7831C38.8212 61.0228 38.1206 58.566 37.2475 57.0381C36.5153 55.7566 35.093 53.0249 33.5382 52.6794C32.6892 52.4907 31.9391 51.6589 30.953 51.5428C30.7371 51.5174 30.0593 51.1457 29.8289 51.0433C29.3114 50.8132 28.7524 51.0278 28.2553 50.8185C25.9221 49.836 23.9796 51.3367 22.1855 52.3921C21.0373 53.0675 19.3682 54.9405 19.0258 56.1389C18.8932 56.6027 17.8865 58.4711 17.4771 57.0381C17.2781 56.3416 16.0095 54.8471 15.3414 54.4653C15.1168 54.337 14.6839 53.8078 14.4922 53.6161C14.1609 53.2847 13.782 52.9657 13.4681 52.6169C12.6613 51.7206 11.5821 51.3331 10.4956 50.8185C8.49608 49.8713 6.45219 49.9692 4.20105 49.9692"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M399.961 22.0319C401.351 22.0319 402.391 22.0869 403.446 22.9311C403.956 23.3392 404.123 23.6954 404.582 24.155C404.98 24.5526 405.105 25.5622 405.469 25.8536C406.1 26.3584 405.97 29.2217 405.794 30.0125C405.465 31.494 404.218 32.4809 402.996 33.1598C400.996 34.2713 397.396 35.729 395.016 34.671C393.854 34.1546 392.455 34.3421 391.694 33.0474C391.469 32.6651 390.79 31.8636 390.744 31.4737C390.664 30.7918 389.881 30.0653 389.845 29.4505C389.767 28.1247 389.62 26.7212 389.62 25.2916C389.62 24.5422 389.62 23.7929 389.62 23.0435C389.62 22.132 390.096 21.8571 390.282 21.0203C390.386 20.552 390.929 19.6362 391.306 19.3342C391.811 18.9307 391.944 18.1156 392.318 17.6482C392.913 16.9042 393.769 15.5755 394.666 15.0629C395.734 14.4527 396.611 13.7046 397.713 13.2145C399.162 12.5707 400.663 12.6509 402.16 12.1904C403.742 11.7035 406.094 12.1404 407.78 12.1404C408.692 12.1404 410.251 13.2229 410.927 13.764C412.001 14.6233 413.059 15.5959 413.999 16.5366C414.393 16.9301 414.737 17.5843 415.023 18.0853C415.315 18.5962 416.022 19.3891 416.135 19.8962C416.479 21.4447 417.496 22.9367 417.496 24.5047C417.496 26.3385 417.651 28.2503 417.259 30.0125C417.058 30.9186 415.995 33.7078 415.248 34.2214C414.48 34.7496 413.916 36.3623 413.225 37.0939C412.763 37.5831 412.025 38.5346 411.701 39.1171C410.874 40.6065 409.282 41.5311 408.454 42.9388C407.748 44.1387 406.143 44.7252 405.182 45.6865C402.995 47.8736 399.061 49.4582 396.015 49.4582C394.725 49.4582 392.812 49.2425 392.093 47.9845C391.536 47.0088 389.845 45.8844 389.845 44.6249C389.845 43.5721 388.741 41.7736 389.67 40.7407C390.504 39.8147 391.994 38.9643 393.217 38.8923C394.403 38.8226 396.842 38.5665 397.039 40.2412C397.082 40.6061 397.489 40.6517 397.489 41.1404C397.489 41.5129 397.51 41.8927 397.489 42.2644C397.434 43.1898 396.442 43.0372 395.915 43.3885"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M415.473 37.3187C415.473 39.079 416.174 41.5358 417.047 43.0638C417.779 44.3453 419.201 47.077 420.756 47.4225C421.605 47.6112 422.355 48.443 423.341 48.559C423.557 48.5844 424.235 48.9562 424.465 49.0586C424.983 49.2886 425.542 49.0741 426.039 49.2834C428.372 50.2658 430.315 48.7651 432.109 47.7098C433.257 47.0343 434.926 45.1614 435.269 43.963C435.401 43.4992 436.408 41.6308 436.817 43.0638C437.016 43.7602 438.285 45.2548 438.953 45.6365C439.177 45.7649 439.61 46.2941 439.802 46.4858C440.133 46.8171 440.512 47.1362 440.826 47.485C441.633 48.3813 442.712 48.7687 443.799 49.2834C445.798 50.2306 447.842 50.1327 450.093 50.1327"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M399.961 78.2392C401.351 78.2392 402.391 78.1842 403.446 77.34C403.956 76.9319 404.123 76.5757 404.582 76.116C404.98 75.7184 405.105 74.7089 405.469 74.4175C406.1 73.9126 405.97 71.0494 405.794 70.2586C405.465 68.777 404.218 67.7902 402.996 67.1113C400.996 65.9998 397.396 64.5421 395.016 65.6001C393.854 66.1165 392.455 65.929 391.694 67.2237C391.469 67.606 390.79 68.4074 390.744 68.7973C390.664 69.4793 389.881 70.2058 389.845 70.8206C389.767 72.1463 389.62 73.5498 389.62 74.9795C389.62 75.7288 389.62 76.4782 389.62 77.2275C389.62 78.139 390.096 78.414 390.282 79.2508C390.386 79.719 390.929 80.6349 391.306 80.9368C391.811 81.3404 391.944 82.1555 392.318 82.6229C392.913 83.3668 393.769 84.6955 394.666 85.2082C395.734 85.8184 396.611 86.5665 397.713 87.0566C399.162 87.7004 400.663 87.6201 402.16 88.0807C403.742 88.5676 406.094 88.1306 407.78 88.1306C408.692 88.1306 410.251 87.0482 410.927 86.507C412.001 85.6478 413.059 84.6751 413.999 83.7344C414.393 83.3409 414.737 82.6867 415.023 82.1858C415.315 81.6748 416.022 80.882 416.135 80.3748C416.479 78.8264 417.496 77.3344 417.496 75.7663C417.496 73.9326 417.651 72.0207 417.259 70.2586C417.058 69.3525 415.995 66.5632 415.248 66.0497C414.48 65.5215 413.916 63.9087 413.225 63.1772C412.763 62.688 412.025 61.7365 411.701 61.1539C410.874 59.6646 409.282 58.7399 408.454 57.3322C407.748 56.1324 406.143 55.5459 405.182 54.5846C402.995 52.3975 399.061 50.8128 396.015 50.8128C394.725 50.8128 392.812 51.0286 392.093 52.2866C391.536 53.2623 389.845 54.3867 389.845 55.6462C389.845 56.6989 388.741 58.4974 389.67 59.5303C390.504 60.4563 391.994 61.3068 393.217 61.3787C394.403 61.4484 396.842 61.7046 397.039 60.0299C397.082 59.665 397.489 59.6194 397.489 59.1307C397.489 58.7582 397.51 58.3784 397.489 58.0066C397.434 57.0813 396.442 57.2338 395.915 56.8826"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M415.473 62.9523C415.473 61.192 416.174 58.7352 417.047 57.2073C417.779 55.9258 419.201 53.1941 420.756 52.8485C421.605 52.6599 422.355 51.828 423.341 51.712C423.557 51.6866 424.235 51.3148 424.465 51.2125C424.983 50.9824 425.542 51.197 426.039 50.9877C428.372 50.0052 430.315 51.5059 432.109 52.5613C433.257 53.2367 434.926 55.1096 435.269 56.3081C435.401 56.7719 436.408 58.6403 436.817 57.2073C437.016 56.5108 438.285 55.0163 438.953 54.6345C439.177 54.5062 439.61 53.977 439.802 53.7852C440.133 53.4539 440.512 53.1349 440.826 52.7861C441.633 51.8898 442.712 51.5023 443.799 50.9877C445.798 50.0405 447.842 50.1384 450.093 50.1384"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M81.2341 81.8048C81.2341 79.6361 81.8581 79.0448 83.9355 78.5832C85.6085 78.2114 87.7174 79.231 87.7174 81.0844C87.7174 84.954 84.5494 86.8474 81.054 86.8474C80.0031 86.8474 77.0096 87.0676 76.9119 85.4066C76.8005 83.512 76.5518 81.7666 76.5518 79.8238C76.5518 76.188 82.0822 75.3215 84.836 75.3215C92.7563 75.3215 100.793 75.3215 108.788 75.3215C112.85 75.3215 117.177 76.0419 121.394 76.0419C125.739 76.0419 129.85 76.4021 134.181 76.4021C142.306 76.4021 150.462 76.7623 158.673 76.7623C163.719 76.7623 168.831 76.4021 173.801 76.4021C178.46 76.4021 183.121 75.6817 187.848 75.6817C196.319 75.6817 204.79 75.6817 213.261 75.6817C215.475 75.6817 217.69 75.6817 219.904 75.6817C220.805 75.6817 221.705 75.6817 222.606 75.6817C223.636 75.6817 223.936 76.1391 224.787 76.3821C227.204 77.0726 230.561 80.7194 230.71 83.2455C230.757 84.0455 231.152 88.2813 230.51 88.6483C229.235 89.3768 227.055 90.6227 225.587 89.4487C225.075 89.039 223.757 89.2549 223.526 88.4482C223.3 87.658 223.146 86.7794 223.146 85.9469C223.146 84.1669 222.926 82.6294 224.407 81.4446C225.365 80.6779 226.364 79.3024 227.388 78.4831C228.427 77.652 229.968 76.7941 231.27 76.4221C234.691 75.4447 238.843 75.3215 242.596 75.3215C252.078 75.3215 261.435 75.6817 270.87 75.6817C275.426 75.6817 279.981 75.6817 284.537 75.6817C290.222 75.6817 295.89 76.4021 301.586 76.4021C312.036 76.4021 323.006 77.3538 333.342 76.0619C337.879 75.4947 342.846 76.0419 347.409 76.0419C351.807 76.0419 355.981 75.6817 360.375 75.6817C364.337 75.6817 368.299 75.6817 372.261 75.6817C373.526 75.6817 374.897 77.3017 375.503 78.3631C375.96 79.163 377.541 82.3353 376.403 83.2455C375.627 83.8664 375.71 85.1411 374.783 85.6868C374.154 86.0567 373.451 86.3279 372.902 86.7673C372.231 87.3036 367.898 86.9735 367.599 85.9269C367.275 84.7926 365.994 82.093 368.299 81.8048C369.884 81.6068 371.541 80.007 371.541 82.8854"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M81.2341 12.7819C81.2341 14.9506 81.8581 15.5418 83.9355 16.0035C85.6085 16.3753 87.7174 15.3556 87.7174 13.5022C87.7174 9.63272 84.5494 7.7393 81.054 7.7393C80.0031 7.7393 77.0096 7.51908 76.9119 9.18003C76.8005 11.0747 76.5518 12.8201 76.5518 14.7629C76.5518 18.3987 82.0822 19.2651 84.836 19.2651C92.7563 19.2651 100.793 19.2651 108.788 19.2651C112.85 19.2651 117.177 18.5448 121.394 18.5448C125.739 18.5448 129.85 18.1846 134.181 18.1846C142.306 18.1846 150.462 17.8244 158.673 17.8244C163.719 17.8244 168.831 18.1846 173.801 18.1846C178.46 18.1846 183.121 18.905 187.848 18.905C196.319 18.905 204.79 18.905 213.261 18.905C215.475 18.905 217.69 18.905 219.904 18.905C220.805 18.905 221.705 18.905 222.606 18.905C223.636 18.905 223.936 18.4476 224.787 18.2046C227.204 17.514 230.561 13.8673 230.71 11.3411C230.757 10.5412 231.152 6.30538 230.51 5.93839C229.235 5.20987 227.055 3.96392 225.587 5.13799C225.075 5.54764 223.757 5.33182 223.526 6.13849C223.3 6.92864 223.146 7.80727 223.146 8.63976C223.146 10.4198 222.926 11.9572 224.407 13.142C225.365 13.9088 226.364 15.2843 227.388 16.1035C228.427 16.9346 229.968 17.7925 231.27 18.1646C234.691 19.142 238.843 19.2651 242.596 19.2651C252.078 19.2651 261.435 18.905 270.87 18.905C275.426 18.905 279.981 18.905 284.537 18.905C290.222 18.905 295.89 18.1846 301.586 18.1846C312.036 18.1846 323.006 17.2328 333.342 18.5248C337.879 19.092 342.846 18.5448 347.409 18.5448C351.807 18.5448 355.981 18.905 360.375 18.905C364.337 18.905 368.299 18.905 372.261 18.905C373.526 18.905 374.897 17.2849 375.503 16.2236C375.96 15.4236 377.541 12.2513 376.403 11.3411C375.627 10.7203 375.71 9.44556 374.783 8.89989C374.154 8.52997 373.451 8.25873 372.902 7.81934C372.231 7.28312 367.898 7.61314 367.599 8.65977C367.275 9.79411 365.994 12.4937 368.299 12.7819C369.884 12.9799 371.541 14.5796 371.541 11.7013"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <span className={classes.text}>{children}</span>
    </button>
  );
};

import React from 'react';

export const Graph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.15275 3.55632C8.20368 3.65999 8.23732 3.771 8.25239 3.88513L8.53082 8.02505L8.66903 10.1059C8.67046 10.3198 8.70403 10.5325 8.76867 10.7368C8.9356 11.1333 9.33716 11.3854 9.77405 11.3678L16.4313 10.9323C16.7196 10.9276 16.998 11.0354 17.2052 11.2321C17.3779 11.396 17.4894 11.6104 17.5246 11.841L17.5364 11.981C17.2609 15.7957 14.4592 18.9774 10.6524 19.7988C6.84555 20.6201 2.94186 18.8851 1.06071 15.5357C0.518387 14.5626 0.17965 13.493 0.0643819 12.3898C0.0162286 12.0632 -0.00497451 11.7333 0.000979226 11.4033C-0.00496595 7.31352 2.90747 3.77775 6.98433 2.92536C7.47501 2.84896 7.95603 3.10871 8.15275 3.55632Z"
      fill="currentColor"
    />
    <path
      opacity="0.4"
      d="M10.8686 0.000819186C15.4285 0.116827 19.2609 3.39579 19.9986 7.81229L19.9916 7.84488L19.9714 7.89227L19.9742 8.02236C19.9638 8.19471 19.8972 8.36054 19.7826 8.49448C19.6631 8.63401 19.4999 8.72903 19.3202 8.76591L19.2106 8.78095L11.5298 9.27861C11.2743 9.3038 11.0199 9.22142 10.8299 9.05195C10.6716 8.91073 10.5704 8.72009 10.5418 8.51468L10.0263 0.845062C10.0173 0.819129 10.0173 0.791015 10.0263 0.765082C10.0333 0.553672 10.1264 0.35384 10.2846 0.21023C10.4429 0.0666198 10.6532 -0.00880037 10.8686 0.000819186Z"
      fill="currentColor"
    />
  </svg>
);
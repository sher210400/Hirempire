import { contactBlockImg, logoSmall } from "../../imagesContants";
import "./contact-block.scss";

export const ContactBlock = ({ isRightGrey }) => (
  <div
    className={`${
      isRightGrey ? "contact-block contact-block-grey" : "contact-block"
    }`}
  >
    <div className="left-side">
      <img src={contactBlockImg} alt="background" className="left-side-image" />
      <div className="text-block">
        <span>
          <a href="tel:++380451632611">+380 45 163 2611</a>
        </span>
        <span>
          <a href="mailto: hirempire@gmail.com">hirempire@gmail.com</a>
        </span>
        <span>38°53′51″ 77°02′11″</span>
      </div>
      <div className="link-block">
        <ul className="link-list">
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
        </ul>
        <a>
          <svg
            width="102"
            height="46"
            viewBox="0 0 102 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_256_667)">
              <path
                d="M76.2793 12.179H73.718L73.5586 23.7984H76.2075L76.2793 12.179Z"
                fill="white"
              />
              <path
                d="M68.7828 12.1117V23.7956H71.4533V11.3848C71.515 10.8024 71.2652 9.68052 71.2652 9.68052C70.2846 7.62135 67.2896 9.17968 67.2896 9.17968L59.2797 14.1409V0.180298H56.5676L56.5547 23.7913H59.2094V17.352L68.3248 11.6481C68.8876 11.4893 68.7828 12.1117 68.7828 12.1117Z"
                fill="white"
              />
              <path
                d="M81.1776 17.2704L90.8558 10.9927L89.5192 8.66455L78.3822 15.8995V27.1298L68.7686 33.2229V41.1233H71.5639V34.5952L81.1776 28.5193V17.2704Z"
                fill="white"
              />
              <path
                d="M8.16185 39.3345C7.74405 39.4447 5.72972 39.3145 4.49069 38.257V36.8904L12.4906 31.6487L12.5279 31.6273L12.8983 28.4033L12.8797 28.379C12.8581 28.3504 12.8208 28.3046 12.7691 28.2359C10.6155 25.7503 7.26021 25.351 4.3744 26.8049C3.26785 27.3491 2.30706 28.1478 1.57136 29.1351C0.835663 30.1224 0.346168 31.2699 0.143299 32.483C-0.260141 34.7597 0.174886 37.3383 1.69532 39.147V43.4729H4.49069V41.2205C6.58542 42.1993 8.99027 42.3152 11.1022 41.1948C12.4263 40.4987 13.5032 39.413 14.1862 38.0853C14.4368 37.5537 14.655 37.0075 14.8394 36.4497H12.3987C10.5007 39.6049 8.16185 39.3345 8.16185 39.3345ZM2.719 34.8312C2.70895 34.7325 2.70321 34.6338 2.69746 34.535C2.62453 33.4134 2.84831 32.2923 3.34641 31.2838C3.84731 30.3184 4.63762 29.5325 5.60745 29.0355C6.57727 28.5384 7.6784 28.355 8.75768 28.5106C9.54991 28.6282 10.2947 28.9598 10.9113 29.4694L2.719 34.8312Z"
                fill="white"
              />
              <path
                d="M89.4047 39.3345C88.9869 39.4447 86.964 39.3145 85.7321 38.257V36.889L93.7722 31.8105L94.1426 28.4005C94.1426 28.4005 94.1311 28.3847 94.1067 28.3575L94.0679 28.3089C94.0536 28.2903 94.0335 28.266 94.012 28.2416C91.8584 25.756 88.5045 25.3554 85.6172 26.8107C84.5109 27.3537 83.55 28.1513 82.814 29.1377C82.0781 30.124 81.5881 31.2707 81.3847 32.483C80.9813 34.7597 81.4149 37.3383 82.9353 39.1471V43.4715H85.7307V41.2205C87.8283 42.1993 90.2317 42.3152 92.3436 41.1948C93.6678 40.4987 94.7446 39.413 95.4276 38.0853C95.6776 37.5536 95.8953 37.0074 96.0794 36.4497H93.6387C91.7435 39.605 89.4047 39.3345 89.4047 39.3345ZM83.9604 34.8313C83.9504 34.7325 83.9446 34.6338 83.9403 34.535C83.8669 33.4135 84.0902 32.2924 84.5878 31.2839C85.0887 30.3202 85.8781 29.5358 86.8464 29.0394C87.8148 28.543 88.9141 28.3592 89.9919 28.5135C90.7841 28.6314 91.5288 28.9629 92.1455 29.4723L83.9604 34.8313Z"
                fill="white"
              />
              <path
                d="M39.1769 26.7262L30.8684 31.8376L30.7248 28.1343C30.7138 27.8121 30.6314 27.4964 30.4835 27.2097C30.3356 26.9231 30.1259 26.6726 29.8694 26.4763C29.6129 26.28 29.3159 26.1427 28.9999 26.0744C28.6838 26.006 28.3565 26.0082 28.0414 26.0808C27.5614 26.199 27.0972 26.3739 26.6588 26.6017L18.6187 31.6573V29.6211H15.9971L15.9727 41.1032H18.623V35.0588L27.8418 29.1631C28.2395 29.0387 28.1965 29.5495 28.1965 29.5495V41.1075H30.8684V35.1875L40.2135 29.0959C40.7749 28.9299 40.6715 29.5538 40.6715 29.5538V41.1075H43.3434V28.6981C43.4008 28.1171 43.1539 26.9938 43.1539 26.9938C42.169 24.9332 39.1769 26.7262 39.1769 26.7262Z"
                fill="white"
              />
              <path
                d="M63.1603 41.1076H65.6958L65.6828 29.644H63.1416L63.1603 41.1076Z"
                fill="white"
              />
              <path
                d="M50.7645 25.9936C50.0095 26.3144 49.3166 26.7643 48.7172 27.323V25.5744H45.8457V46.0001H48.7172V39.99C49.0628 40.3109 49.4489 40.5856 49.8657 40.8071C51.9777 41.9261 54.3811 41.8087 56.4701 40.8314C57.2676 40.4541 58.0068 39.965 58.6653 39.379C58.8809 39.1875 59.082 38.9804 59.2669 38.7593C61.3157 36.2508 61.4736 32.4101 59.9718 29.6011C58.3265 26.4873 54.127 24.577 50.7645 25.9936ZM58.2748 34.143C58.2748 34.2432 58.2648 34.3405 58.2547 34.4407C58.201 35.1004 58.0167 35.7429 57.7123 36.3312C57.408 36.9194 56.9897 37.4417 56.4816 37.8679C55.244 38.9253 53.7537 39.2387 53.3302 39.1285C53.3302 39.1285 50.6023 39.2158 48.7172 36.2823V30.7659C49.0543 30.1217 49.5153 29.5499 50.0739 29.0831C50.6904 28.5737 51.4353 28.2426 52.2275 28.1258C53.3053 27.9705 54.4048 28.1539 55.3731 28.6504C56.3414 29.1469 57.1303 29.9319 57.6302 30.8962C58.1278 31.9031 58.3502 33.0231 58.2748 34.143Z"
                fill="white"
              />
              <path
                d="M99.0396 0C98.4545 0.00028299 97.8825 0.173493 97.3961 0.497731C96.9097 0.821968 96.5306 1.28267 96.3069 1.8216C96.0831 2.36053 96.0247 2.95347 96.1391 3.52547C96.2534 4.09748 96.5353 4.62284 96.9492 5.03516C97.3631 5.44747 97.8904 5.72822 98.4643 5.8419C99.0383 5.95558 99.6332 5.89709 100.174 5.67383C100.714 5.45057 101.176 5.07256 101.502 4.58759C101.827 4.10262 102 3.53247 102 2.94923C101.999 2.16715 101.687 1.41744 101.132 0.864559C100.577 0.311676 99.8243 0.000757008 99.0396 0V0ZM99.0396 5.56934C98.5197 5.56934 98.0114 5.41567 97.5791 5.12777C97.1468 4.83987 96.8099 4.43067 96.6109 3.9519C96.4119 3.47314 96.3599 2.94633 96.4613 2.43807C96.5628 1.92982 96.8131 1.46296 97.1808 1.09654C97.5484 0.730107 98.0168 0.480565 98.5268 0.379468C99.0367 0.278371 99.5653 0.330257 100.046 0.528567C100.526 0.726877 100.937 1.0627 101.225 1.49358C101.514 1.92445 101.668 2.43102 101.668 2.94923C101.668 3.6439 101.39 4.30989 100.898 4.80109C100.405 5.29229 99.7366 5.56858 99.0396 5.56934Z"
                fill="white"
              />
              <path
                d="M97.2402 2.14215H97.7959V3.83928H98.0715V2.14215H98.6286V1.88171H97.2402V2.14215Z"
                fill="white"
              />
              <path
                d="M99.7345 3.17388L99.1559 1.88171H98.8975V3.83928H99.1674V2.51563L99.6369 3.5674H99.8292L100.3 2.48845V3.83928H100.569V1.88171H100.312L99.7345 3.17388Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_256_667">
                <rect width="102" height="46" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
    <div className="right-side">
      <h2 className="main-article">
        Contacts <span>Contacts Contacts</span>
      </h2>
      <div className="form">
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="femail">E-mail</label>
        <input type="email" id="femail" name="femail" />
        <label htmlFor="fphone">Phone</label>
        <input
          type="tel"
          id="fphone"
          name="fphone"
          pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <div className="btn-wrapper">
          <button className="confirm-btn">Send</button>
        </div>
      </div>
      <div className="link-block">
        <ul className="link-list">
          <li>
            <img src={logoSmall} alt="logo" />
            <svg
              width="62"
              height="28"
              viewBox="0 0 62 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_294_1721)">
                <path
                  d="M46.3657 7.41333H44.8088L44.7119 14.4861H46.322L46.3657 7.41333Z"
                  fill="black"
                />
                <path
                  d="M41.8097 7.37199V14.4839H43.4329V6.92951C43.4705 6.575 43.3186 5.89212 43.3186 5.89212C42.7226 4.63871 40.9021 5.58726 40.9021 5.58726L36.0333 8.6071V0.109375H34.3848L34.377 14.4813H35.9906V10.5617L41.5313 7.08978C41.8734 6.99309 41.8097 7.37199 41.8097 7.37199Z"
                  fill="black"
                />
                <path
                  d="M49.3435 10.5128L55.2264 6.69157L54.4139 5.27441L47.6444 9.67832V16.5141L41.8008 20.223V25.0319H43.4999V21.0583L49.3435 17.3599V10.5128Z"
                  fill="black"
                />
                <path
                  d="M4.96151 23.9428C4.70755 24.0098 3.48316 23.9306 2.73002 23.2869V22.455L7.59269 19.2645L7.61539 19.2514L7.84054 17.289L7.8292 17.2742C7.81611 17.2568 7.79342 17.2289 7.762 17.1871C6.45295 15.6741 4.41345 15.4311 2.65933 16.316C1.98672 16.6473 1.40271 17.1334 0.955524 17.7344C0.508335 18.3354 0.210799 19.0339 0.0874865 19.7723C-0.157742 21.1581 0.106686 22.7277 1.03087 23.8286V26.4618H2.73002V25.0908C4.00328 25.6865 5.46506 25.7571 6.7488 25.0751C7.55365 24.6514 8.20819 23.9905 8.62335 23.1823C8.7757 22.8588 8.9083 22.5263 9.02043 22.1868H7.53684C6.38313 24.1074 4.96151 23.9428 4.96151 23.9428ZM1.65311 21.2016C1.647 21.1415 1.64351 21.0814 1.64002 21.0213C1.59569 20.3386 1.73171 19.6562 2.03448 19.0424C2.33894 18.4547 2.81933 17.9763 3.40883 17.6738C3.99833 17.3712 4.66764 17.2596 5.32368 17.3543C5.80523 17.4259 6.25795 17.6277 6.63273 17.9379L1.65311 21.2016Z"
                  fill="black"
                />
                <path
                  d="M54.3434 23.9428C54.0894 24.0098 52.8598 23.9306 52.111 23.2869V22.4542L56.9981 19.3629L57.2233 17.2873C57.2233 17.2873 57.2163 17.2777 57.2015 17.2611L57.1779 17.2315C57.1692 17.2202 57.1569 17.2054 57.1439 17.1906C55.8348 15.6776 53.7962 15.4337 52.0412 16.3195C51.3687 16.6501 50.7846 17.1356 50.3373 17.736C49.8899 18.3363 49.5921 19.0343 49.4685 19.7723C49.2232 21.1581 49.4868 22.7277 50.411 23.8287V26.4609H52.1101V25.0908C53.3851 25.6866 54.846 25.7571 56.1298 25.0751C56.9346 24.6514 57.5892 23.9905 58.0043 23.1824C58.1563 22.8587 58.2886 22.5263 58.4005 22.1868H56.917C55.765 24.1074 54.3434 23.9428 54.3434 23.9428ZM51.0341 21.2016C51.028 21.1415 51.0245 21.0814 51.0219 21.0213C50.9773 20.3387 51.113 19.6563 51.4155 19.0424C51.7199 18.4558 52.1997 17.9783 52.7883 17.6762C53.3769 17.374 54.0451 17.2621 54.7003 17.3561C55.1818 17.4278 55.6345 17.6296 56.0093 17.9397L51.0341 21.2016Z"
                  fill="black"
                />
                <path
                  d="M23.8135 16.2681L18.7632 19.3794L18.676 17.1252C18.6693 16.9291 18.6192 16.7369 18.5293 16.5624C18.4394 16.388 18.3119 16.2355 18.156 16.116C18.0001 15.9965 17.8196 15.913 17.6275 15.8713C17.4354 15.8297 17.2364 15.8311 17.0449 15.8753C16.7531 15.9472 16.471 16.0537 16.2045 16.1923L11.3174 19.2697V18.0302H9.72382L9.70898 25.0193H11.32V21.3401L16.9236 17.7515C17.1653 17.6757 17.1391 17.9867 17.1391 17.9867V25.0219H18.7632V21.4185L24.4436 17.7105C24.7849 17.6095 24.722 17.9893 24.722 17.9893V25.0219H26.3461V17.4684C26.381 17.1148 26.2309 16.431 26.2309 16.431C25.6322 15.1767 23.8135 16.2681 23.8135 16.2681Z"
                  fill="black"
                />
                <path
                  d="M38.3922 25.022H39.9334L39.9255 18.0442H38.3809L38.3922 25.022Z"
                  fill="black"
                />
                <path
                  d="M30.8571 15.8225C30.3981 16.0177 29.9769 16.2916 29.6126 16.6317V15.5673H27.8672V28.0004H29.6126V24.342C29.8227 24.5374 30.0574 24.7046 30.3107 24.8394C31.5945 25.5205 33.0554 25.4491 34.3252 24.8542C34.8099 24.6245 35.2593 24.3268 35.6595 23.9701C35.7905 23.8536 35.9128 23.7275 36.0252 23.593C37.2705 22.0661 37.3665 19.7282 36.4537 18.0184C35.4536 16.123 32.9009 14.9602 30.8571 15.8225ZM35.4221 20.783C35.4221 20.844 35.416 20.9032 35.4099 20.9642C35.3773 21.3658 35.2652 21.7569 35.0802 22.1149C34.8952 22.473 34.641 22.7909 34.3321 23.0503C33.5799 23.694 32.674 23.8848 32.4166 23.8177C32.4166 23.8177 30.7584 23.8708 29.6126 22.0852V18.7274C29.8175 18.3353 30.0977 17.9872 30.4373 17.7031C30.812 17.393 31.2648 17.1914 31.7463 17.1204C32.4014 17.0258 33.0698 17.1375 33.6583 17.4397C34.2469 17.7419 34.7265 18.2197 35.0303 18.8067C35.3328 19.4196 35.4679 20.1013 35.4221 20.783Z"
                  fill="black"
                />
                <path
                  d="M60.2001 0C59.8444 0.000172255 59.4967 0.105604 59.2011 0.302966C58.9054 0.500329 58.675 0.780758 58.539 1.1088C58.403 1.43684 58.3675 1.79777 58.437 2.14594C58.5065 2.49412 58.6779 2.81391 58.9295 3.06488C59.181 3.31585 59.5015 3.48674 59.8504 3.55594C60.1993 3.62514 60.5609 3.58953 60.8895 3.45364C61.2181 3.31774 61.4989 3.08764 61.6965 2.79244C61.8941 2.49725 61.9996 2.1502 61.9996 1.79518C61.9989 1.31913 61.8091 0.862791 61.4717 0.526254C61.1344 0.189716 60.6771 0.000460788 60.2001 0V0ZM60.2001 3.39003C59.8841 3.39003 59.5751 3.2965 59.3124 3.12125C59.0496 2.94601 58.8448 2.69693 58.7238 2.40551C58.6029 2.11409 58.5712 1.79342 58.6329 1.48405C58.6946 1.17467 58.8467 0.8905 59.0702 0.667456C59.2937 0.444413 59.5784 0.292518 59.8884 0.230981C60.1983 0.169443 60.5196 0.201026 60.8116 0.321737C61.1036 0.442447 61.3531 0.646863 61.5287 0.909134C61.7043 1.17141 61.798 1.47975 61.798 1.79518C61.7976 2.21802 61.6291 2.62341 61.3295 2.9224C61.0299 3.2214 60.6238 3.38957 60.2001 3.39003Z"
                  fill="black"
                />
                <path
                  d="M59.1074 1.30391H59.4452V2.33695H59.6127V1.30391H59.9513V1.14539H59.1074V1.30391Z"
                  fill="black"
                />
                <path
                  d="M60.623 1.93192L60.2713 1.14539H60.1143V2.33695H60.2783V1.53125L60.5637 2.17145H60.6806L60.9669 1.5147V2.33695H61.1301V1.14539H60.9739L60.623 1.93192Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_294_1721">
                  <rect width="62" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

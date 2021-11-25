import { Card } from "./components/Card";

function App() {
  const cardData = [
    {
      title: "Sales",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
      odit vero laudantium dolores recusandae officiis, voluptas molestiae
      voluptates temporibus ut nam accusantium corrupti a laborum,
      aspernatur, amet placeat.`,
      link: "#",
      icon: (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current text-white"
        >
          <title>phone</title>
          <path d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path>
        </svg>
      ),
      class:
        "relative p-8 shadow-md rounded-2xl bg-white lg:w-1/3 mr-8 mb-8 lg:mb-0 pb-20 w-full",
    },
    {
      title: "Technical Support",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
      odit vero laudantium dolores recusandae officiis, voluptas molestiae
      voluptates temporibus ut nam accusantium corrupti a laborum,
      aspernatur, amet placeat.`,
      link: "#",
      icon: (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current text-white"
        >
          <title>life-buoy</title>
          <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM17.618 4.968l-2.86 2.86c0 0 0 0 0 0-0.791-0.523-1.739-0.828-2.758-0.828s-1.967 0.305-2.757 0.829l-2.86-2.86c1.539-1.233 3.492-1.969 5.617-1.969s4.078 0.736 5.618 1.968zM19.032 6.382c1.232 1.54 1.968 3.493 1.968 5.618s-0.736 4.078-1.968 5.618l-2.86-2.86c0.523-0.791 0.828-1.739 0.828-2.758s-0.305-1.967-0.829-2.757zM7.829 14.757l-2.86 2.86c-1.233-1.539-1.969-3.492-1.969-5.617s0.736-4.078 1.968-5.618l2.86 2.86c-0.523 0.791-0.828 1.739-0.828 2.758s0.305 1.967 0.829 2.757zM6.382 19.032l2.86-2.86c0.791 0.523 1.739 0.828 2.758 0.828s1.967-0.305 2.757-0.829l2.86 2.86c-1.539 1.233-3.492 1.969-5.617 1.969s-4.078-0.736-5.618-1.968z"></path>
        </svg>
      ),
      class:
        "relative p-8 shadow-md rounded-2xl bg-white lg:w-1/3 mr-8 pb-20 mb-8 w-full lg:mb-0",
    },
    {
      title: "Media Inquiries",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
      odit vero laudantium dolores recusandae officiis, voluptas molestiae
      voluptates temporibus ut nam accusantium corrupti a laborum,
      aspernatur, amet placeat.`,
      link: "#",
      icon: (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="w-6 h-6"
        >
          <title>media-inquiries</title>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.6657"
            stroke="#fff"
            d="M26.704 9.399v15.752c0 2.878-1.863 5.325-4.45 6.197h5.224c2.115 0 3.832-1.717 3.832-3.833v-14.285c0-2.115-1.717-3.832-3.832-3.832h-0.775z"
          ></path>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.0861"
            stroke="#fff"
            d="M26.709 7.084c0-3.61-2.931-6.541-6.542-6.541h-13.083c-3.61 0-6.541 2.931-6.541 6.541v17.755c0 3.61 2.931 6.542 6.541 6.542h13.083c3.61 0 6.542-2.931 6.542-6.542v-17.755z"
          ></path>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.9596"
            stroke="#fff"
            d="M22.128 8.091c0-0.708-0.575-1.282-1.282-1.282h-14.439c-0.708 0-1.282 0.575-1.282 1.282v10.927c0 0.708 0.575 1.282 1.282 1.282h14.439c0.708 0 1.282-0.575 1.282-1.282v-10.927z"
          ></path>
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="1.5"
            strokeWidth="2.5777"
            stroke="#fff"
            d="M5.347 25.115h15.826"
          ></path>
        </svg>
      ),
      class:
        "relative p-8 shadow-md rounded-2xl bg-white lg:w-1/3 pb-20 mb-8 w-full lg:mb-0",
    },
  ];
  return (
    <div className="app after:bg-gray-900 after:bg-opacity-75 after:absolute">
      <div className="cover-image-section min-h-400 p-8">
        <h2 className="text-6xl text-white font-bold mt-8">Support</h2>
        <p className="mt-6 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
          odit vero laudantium dolores recusandae officiis, voluptas molestiae
          voluptates temporibus ut nam accusantium corrupti a laborum,
          aspernatur, amet placeat.
        </p>
      </div>
      <div className="overlay-section lg:flex justify-around p-8 xl:absolute 2xl:-bottom-60 xl:-bottom-80 pb-20">
        <div className="relative p-8 shadow-md rounded-2xl bg-white lg:w-1/3 mr-8 mb-8 lg:mb-0 pb-20 w-full">
          <span className="icon-wrap absolute -top-6 bg-indigo-500 rounded-lg shadow p-4">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <title>phone</title>
              <path d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path>
            </svg>
          </span>
          <h3 className="mt-10 text-xl mb-4">Sales</h3>
          <p className="text-gray-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae illum aliquid ad officiis maiores iusto eos commodi
          </p>
          <span className="absolute bottom-0 right-0 left-0 px-8 py-4 bg-gray-200 rounded-bl-2xl rounded-br-2xl">
            <a href="#" className="text-indigo-500">
              Contact us
            </a>
          </span>
        </div>
        <div className="relative p-8 shadow-md rounded-2xl bg-white lg:w-1/3 mr-8 pb-20 mb-8 w-full lg:mb-0">
          <span className="icon-wrap absolute -top-6 bg-indigo-500 rounded-lg shadow p-4">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <title>life-buoy</title>
              <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM17.618 4.968l-2.86 2.86c0 0 0 0 0 0-0.791-0.523-1.739-0.828-2.758-0.828s-1.967 0.305-2.757 0.829l-2.86-2.86c1.539-1.233 3.492-1.969 5.617-1.969s4.078 0.736 5.618 1.968zM19.032 6.382c1.232 1.54 1.968 3.493 1.968 5.618s-0.736 4.078-1.968 5.618l-2.86-2.86c0.523-0.791 0.828-1.739 0.828-2.758s-0.305-1.967-0.829-2.757zM7.829 14.757l-2.86 2.86c-1.233-1.539-1.969-3.492-1.969-5.617s0.736-4.078 1.968-5.618l2.86 2.86c-0.523 0.791-0.828 1.739-0.828 2.758s0.305 1.967 0.829 2.757zM6.382 19.032l2.86-2.86c0.791 0.523 1.739 0.828 2.758 0.828s1.967-0.305 2.757-0.829l2.86 2.86c-1.539 1.233-3.492 1.969-5.617 1.969s-4.078-0.736-5.618-1.968z"></path>
            </svg>
          </span>
          <h3 className="mt-10 text-xl mb-4">Technical Support</h3>
          <p className="text-gray-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae illum aliquid ad officiis maiores iusto eos commodi
          </p>
          <span className="absolute bottom-0 right-0 left-0 px-8 py-4 bg-gray-200 rounded-bl-2xl rounded-br-2xl">
            <a href="#" className="text-indigo-500">
              Contact us
            </a>
          </span>
        </div>
        <div className="relative p-8 shadow-md rounded-2xl bg-white lg:w-1/3 pb-20 mb-8 w-full lg:mb-0">
          <span className="icon-wrap absolute -top-6 bg-indigo-500 rounded-lg shadow p-4">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="w-6 h-6"
            >
              <title>media-inquiries</title>
              <path
                fill="none"
                stroke-linejoin="round"
                strokeLinecap="round"
                stroke-miterlimit="1.5"
                stroke-width="1.6657"
                stroke="#fff"
                d="M26.704 9.399v15.752c0 2.878-1.863 5.325-4.45 6.197h5.224c2.115 0 3.832-1.717 3.832-3.833v-14.285c0-2.115-1.717-3.832-3.832-3.832h-0.775z"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                strokeLinecap="round"
                stroke-miterlimit="1.5"
                stroke-width="1.0861"
                stroke="#fff"
                d="M26.709 7.084c0-3.61-2.931-6.541-6.542-6.541h-13.083c-3.61 0-6.541 2.931-6.541 6.541v17.755c0 3.61 2.931 6.542 6.541 6.542h13.083c3.61 0 6.542-2.931 6.542-6.542v-17.755z"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                strokeLinecap="round"
                stroke-miterlimit="1.5"
                stroke-width="1.9596"
                stroke="#fff"
                d="M22.128 8.091c0-0.708-0.575-1.282-1.282-1.282h-14.439c-0.708 0-1.282 0.575-1.282 1.282v10.927c0 0.708 0.575 1.282 1.282 1.282h14.439c0.708 0 1.282-0.575 1.282-1.282v-10.927z"
              ></path>
              <path
                fill="none"
                stroke-linejoin="round"
                strokeLinecap="round"
                stroke-miterlimit="1.5"
                stroke-width="2.5777"
                stroke="#fff"
                d="M5.347 25.115h15.826"
              ></path>
            </svg>
          </span>
          <h3 className="mt-10 text-xl mb-4">Media Inquiries</h3>
          <p className="text-gray-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae illum aliquid ad officiis maiores iusto eos commodi
          </p>
          <span className="absolute bottom-0 right-0 left-0 px-8 py-4 bg-gray-200 rounded-bl-2xl rounded-br-2xl">
            <a href="#" className="text-indigo-500">
              Contact us
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

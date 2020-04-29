function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const sc = styled.default;

const colors = {
  orange: "#fc8503",
  darkOrange: "#b56917",
};

const Wrapper = sc.section`
	border: 1px solid #ccc;
	color: #ddd;
	width: 100%; min-width: 10rem; max-width: 30rem;
	min-height: 15rem;
	padding: 1rem;
	position: fixed;
	top: 30%; left: 20%;
	transform: translate(-50%, -50%);
		
	&:after,
	&:before {
		content: '';
		color: #ccc;
		position: absolute;
		width: 0.5rem; height: 0.5rem;
	}

	&:before {
		bottom: -0.5rem;
		right: -0.5rem;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}

	&:after {
		top: -0.5rem;
		left: -0.5rem;
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}
`;

const Wrapper2 = sc.section`
	border: 1px solid #ccc;
	color: #ddd;
	width: 100%; min-width: 10rem; max-width: 30rem;
	min-height: 15rem;
	padding: 1rem;
	position: fixed;
	top: 50%; left: 160%;
	transform: translate(-50%, -50%);
		
	&:after,
	&:before {
		content: '';
		color: #ccc;
		position: absolute;
		width: 0.5rem; height: 0.5rem;
	}

	&:before {
		bottom: -0.5rem;
		right: -0.5rem;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}

	&:after {
		top: -0.5rem;
		left: -0.5rem;
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}
`;

const Wrapper3 = sc.section`
	border: 1px solid #ccc;
	color: #ddd;
	width: 100%; min-width: 10rem; max-width: 30rem;
	min-height: 15rem;
	padding: 1rem;
	position: relative;
	top: 160%; left: 50%;
		
	&:after,
	&:before {
		content: '';
		color: #ccc;
		position: absolute;
		width: 0.5rem; height: 0.5rem;
	}

	&:before {
		bottom: -0.5rem;
		right: -0.5rem;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}

	&:after {
		top: -0.5rem;
		left: -0.5rem;
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}
`;

const Header = sc.h2`
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	line-height: 2rem;
	font-size: 1.875rem;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		left: -0.5rem;
		background-color: ${colors.orange};
		width: 0.25rem; height: 0.25rem;
		margin: 0.875rem 0 0 0;
		border-radius: 50%;
	}
`;

const ControlWrapper = sc.div`
	width: 11rem;
`;

const Body = sc.div`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
`;

const Subheader = sc.h5`
	margin: 0 0 0.5rem;

	strong {
		font-weight: bold;
		letter-spacing: 0.025rem;
	}
`;

const ButtonGroup = sc.div`
	display: flex;
	flex-wrap: wrap;
`;

const Button = sc.button`
	background: none;
	border: 3px solid #ccc;
	cursor: pointer;
	width: 5rem; height: 5rem;
	color: #ccc;
	display: flex;
	line-height: 1;
	flex-direction: column;
	outline: none;
	margin: 0 1rem 0.5rem 0;
	padding: 0.25rem;
	position: relative;
	transition:
		border-color 250ms ease-in-out,
		color 250ms ease-in-out;
	
	&:last-of-type {
		margin-right: 0;
	}

	&:after {
		content: '';
		border-top: 1rem solid transparent;
		border-bottom: 1rem solid transparent;
		border-left: 1rem solid #ccc;
		transform: rotate(45deg);
		position: absolute;
		bottom: -0.4rem; right: 0.075rem;
		transition: border-color 250ms ease-in-out;
	}

	&:hover {
		color: ${colors.darkOrange};
		border-color: ${colors.darkOrange};

		&:after {
			border-left-color: ${colors.darkOrange};
		}
	}

	&:active {
		color: ${colors.orange};
		border-color: ${colors.orange};

		&:after {
			border-left-color: ${colors.orange};
		}
	}
`;

const ButtonHeader = sc.span`
	font-size: 24px;
`;

const ButtonSubheader = sc.span`
	font-size: 18px;
`;

const HR = sc.div`
	border-top: 1px solid #ccc;
	margin: ${({ last }) => (last ? "0 -0.5rem 0.5rem" : "0 -0.5rem 0.25rem")};
`;

const VisualizerWrapper = sc.div`
	margin: 0 1rem;
`;

const Radar = sc.div`
	display: flex;
	position: relative;
	flex: 1 1 auto;
	height: 12rem;
	width: 12rem;
`;

const RadarGrid = sc.div`
	background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)"};
	cursor: pointer;
	position: absolute;
	width: ${({ diameter }) => diameter || "50%"};
	height: ${({ diameter }) => diameter || "50%"};
	border: 1px solid ${({ active }) => (active ? colors.orange : "#666")};
	border-radius: 50%;
	overflow: visible;
	top: 50%; left: 50%;
	transform: translate(-50%, -50%);
	z-index: ${({ index }) => index || "0"};
	transition:
		background-color 300ms ease-in-out,
		border 600ms ease-in-out;

	&:hover {
		background-color: ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.125)" : "rgba(255, 255, 255, 0.05)"};
		transition: background-color 100ms ease-in-out;
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.15);	
	}
`;

const Blip = sc.div`
	cursor: pointer;
	font-size: 0.75rem;
	top: ${({ y }) => `calc(${y} - 1rem)` || "50%"};
	left: ${({ x }) => `calc(${x} + 0.25rem)` || "50%"};
	position: absolute;
	text-transform: uppercase;
	width: 5rem;
	user-select: none;
	z-index: 10;
	font-smoothing: antialiased;

	&:after {
		background-color: #fff;
		bottom: -0.5rem; left: -0.25rem;
		content: '';
		color: #fff;
		position: absolute;
		transform: translate(-50%, -50%);
		width: 0.25rem; height: 0.25rem;
	}
`;

// App Component
class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      distance: "10",
    });
    _defineProperty(
      this,
      "changeDistance",

      (e) => {
        this.setState({ distance: e.currentTarget.dataset.range });
      }
    );
    _defineProperty(
      this,
      "render",

      () =>
        React.createElement(
          Wrapper,
          null,
          React.createElement(Header, null, "MIT Digital Currency Initiative"),
          React.createElement(
            Body,
            null,
            React.createElement(
              ControlWrapper,
              null,
              React.createElement(Subheader, null, "LIT"),
              React.createElement(
                ButtonGroup,
                null,
                React.createElement(
                  Button,
                  null,
                  React.createElement(ButtonHeader, null, "GO"),
                  React.createElement(ButtonSubheader, null, "LANGUAGE")
                ),

                React.createElement(
                  Button,
                  null,
                  React.createElement(ButtonHeader, null, "BITCOIN"),
                  React.createElement(ButtonSubheader, null, "TECH")
                )
              ),

              React.createElement(HR, null),
              React.createElement(HR, { last: true }),

              React.createElement(Subheader, null, "OPENX"),

              React.createElement(
                ButtonGroup,
                null,
                React.createElement(
                  Button,
                  null,
                  React.createElement(ButtonHeader, null, "GO"),
                  React.createElement(ButtonSubheader, null, "LANGUAGE")
                ),

                React.createElement(
                  Button,
                  null,
                  React.createElement(ButtonHeader, null, "STELLAR"),
                  React.createElement(ButtonSubheader, null, "TECH")
                )
              )
            ),

            React.createElement(
              VisualizerWrapper,
              null,
              React.createElement(
                Subheader,
                null,
                "TIME WORKED ON"
                //React.createElement("strong", null, " ", this.state.distance, " KM")
              ),

              React.createElement(
                Radar,
                null,
                React.createElement(Blip, { x: "50%", y: "50%" }, "2017"),
                React.createElement(Blip, { x: "65%", y: "50%" }, "2018"),
                React.createElement(Blip, { x: "83%", y: "50%" }, "2019"),
                React.createElement(Blip, { x: "100%", y: "50%" }, "2020"),

                React.createElement(RadarGrid, {
                  active: this.state.distance === "10",
                  "data-range": "10",
                  diameter: "30%",
                  index: 3,
                  onClick: this.changeDistance,
                }),

                React.createElement(RadarGrid, {
                  active: this.state.distance === "50",
                  "data-range": "50",
                  diameter: "65%",
                  index: 2,
                  onClick: this.changeDistance,
                }),

                React.createElement(RadarGrid, {
                  active: this.state.distance === "100",
                  "data-range": "100",
                  diameter: "100%",
                  index: 1,
                  onClick: this.changeDistance,
                })
              )
            )
          )
        )
    );
  }
}
// Render app
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("main-app")
);


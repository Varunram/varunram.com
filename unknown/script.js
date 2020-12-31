/** @jsx h */
const {
  h,
  render
} = preact;

function App() {
  return (
    h("div", {
        className: "app-container"
      },
      h("header", {
          className: "app-header"
        },
        h("div", {
            className: "app-header__anchor"
          },
          h("span", {
            className: "app-header__anchor__text"
          }, "Eyes-Only-Confidential")),

        h("nav", null,
          h("ul", {
              className: "nav"
            },
            h("li", {
                className: "nav__item"
              },
              h("a", {
                className: "nav__link",
                href: "../index.html",
              }, "Home")),

            h("li", {
                className: "nav__item"
              },
              h("a", {
                  className: "nav__link nav__link--active",
                  href: "#"
                },
                h("span", {
                  className: "nav__link__element"
                }, "Info Log"),
                h("span", {
                    className: "nav__link__element"
                  },
                  h(Badge, null, "12")))),

            h("li", {
                className: "nav__item"
              },
              h("a", {
                className: "nav__link",
                href: "../Varunram-Ganesh-Resume.pdf",
                target: "_blank"
              }, "File")),

            h("li", {
                className: "nav__item"
              },
              h("a", {
                className: "nav__link",
                href: "https://www.google.com/maps/space/mars/@9.5251799,3.5608921,11251685m/data=!3m1!1e3",
                target: "_blank"
              }, "Map")))),

        h("div", null)),

      h("div", {
          className: "app-a"
        },
        h("div", {
            className: "segment-topbar"
          },
          h("div", {
              className: "segment-topbar__header"
            },
            h(TextHeading3, {
              className: "segment-topbar__title"
            }, "Past History")),

          h("div", {
              className: "segment-topbar__aside"
            },
            h("div", {
                className: "button-toolbar"
              },
              h("a", {
                  className: "button button--primary"
                },
                h(IconFeedAdd, {
                  className: "button__icon"
                }))))),

        h(NavSection, {
            renderTitle: props => h("h2", props, "Education")
          },
          h(ChannelNav, {
            activeChannel: {
              id: "5ba5",
              name: "Duke University",
            },
            channels: FIXTURES.education
          }),
        ),

        h(NavSection, {
            renderTitle: props => h("h2", props, "Venture Capital")
          },
          h(ChannelNav, {
            channels: FIXTURES.venture
          })),

        h(NavSection, {
            renderTitle: props => h("h2", props, "Investment Banking")
          },
          h(ChannelNav, {
            channels: FIXTURES.ib
          })),

        h(NavSection, {
            renderTitle: props => h("h2", props, "Academia")
          },
          h(ChannelNav, {
            channels: FIXTURES.research
          })),


        h(NavSection, {
            renderTitle: props => h("h2", props, "Startups")
          },
          h(ChannelNav, {
            channels: FIXTURES.startups
          })),

        h(NavSection, {
            renderTitle: props => h("h2", props, "Direct")
          },
          h(ConversationNav, {
            conversations: FIXTURES.conversation
          }))),


      h("div", {
          className: "app-main"
        },
        h("div", {
            className: "channel-feed"
          },
          h("div", {
              className: "segment-topbar"
            },
            h("div", {
                className: "segment-topbar__header"
              },
              h(TextOverline, {
                className: "segment-topbar__overline"
              }, "BrainImplant_ID: e5e950a3d497b6a1e4a56ce9aac135a9"),


              h(TextHeading4, {
                  className: "segment-topbar__title"
                },
                h(ChannelLink, {
                  name: "host: varunram ganesh"
                }),
              )),


            h("div", {
                className: "segment-topbar__aside"
              },
              h("div", {
                  className: "button-toolbar"
                },
                h("a", {
                    className: "button button--default"
                  },
                  h(IconFeedMute, {
                    className: "button__icon"
                  })),

                h("a", {
                    className: "button button--default"
                  },
                  h(IconFeedSettings, {
                    className: "button__icon"
                  })),

                h("a", {
                    className: "button button--default"
                  },
                  h(IconMenuMore, {
                    className: "button__icon"
                  }))))),

          h("div", {
              className: "channel-feed__body"
            },
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[0].content,
              author: FIXTURES.messages[0].author.name,
              time: FIXTURES.messages[0].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[1].content,
              author: FIXTURES.messages[1].author.name,
              time: FIXTURES.messages[1].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[2].content,
              author: FIXTURES.messages[2].author.name,
              time: FIXTURES.messages[2].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[3].content,
              author: FIXTURES.messages[3].author.name,
              time: FIXTURES.messages[3].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[4].content,
              author: FIXTURES.messages[4].author.name,
              time: FIXTURES.messages[4].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[5].content,
              author: FIXTURES.messages[5].author.name,
              time: FIXTURES.messages[5].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[6].content,
              author: FIXTURES.messages[6].author.name,
              time: FIXTURES.messages[6].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[7].content,
              author: FIXTURES.messages[7].author.name,
              time: FIXTURES.messages[7].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[8].content,
              author: FIXTURES.messages[8].author.name,
              time: FIXTURES.messages[8].dateTime,
            }),
            h(FeedMessage, {
              bodyMessage: FIXTURES.messages[9].content,
              author: FIXTURES.messages[9].author.name,
              time: FIXTURES.messages[9].dateTime,
            })
          ),

          h("div", {
              className: "channel-feed__footer"
            },
            h("form", {
                className: "channel-message-form",
                action: "#",
                onSubmit: e => e.preventDefault()
              },

              h("div", {
                  className: "form-group"
                },
                h("label", {
                  className: "form-label",
                  for: "message"
                }, "Message"),

                h("div", {
                    className: "form-control"
                  },
                  h("textarea", {
                    id: "message",
                    className: "form-control",
                    name: "message"
                  }))),

              h("div", {
                  className: "form-footer"
                },
                h(Button, {
                  type: "submit"
                }, "Send")))))),

      h("div", {
          className: "app-b"
        },
        h(Pad, null,
          h(TextHeading3, {
            $as: "h4"
          }, "What is this?"),
          h(TextParagraph1, null, "A ",
            h("em", null, "top secret "), " portal where you can view information on MR. VARUNRAM GANESH. The content in this websites and all messages within are F.Y.O."),
          h(TextHeading3, {
            $as: "h4"
          }, "Tips"),
          h(TextParagraph1, null, "Positions ordered reverse chronologically."),
          h(TextParagraph1, null, "Numbers denote multiple roles performed."),
          h(TextParagraph1, null, "Highlight indicates current positions."),
          h(TextParagraph1, null, "Venture roles are ongoing."),
          h(TextParagraph1, null, "Messages denote real events."),
          h(TextHeading3, {
            $as: "h4"
          }, "Warning"),
          h(TextParagraph1, null, "Unauthorized access to this website may result in immediate termination"),
        ))));
}

function NavSection({
  children,
  renderTitle
}) {
  return (
    h("div", {
        className: "nav-section"
      },
      h("div", {
          className: "nav-section__header"
        },
        renderTitle({
          className: "nav-section__title"
        })),

      h("div", {
        className: "nav-section__body"
      }, children)));
}

function FeedMessage({
  bodyMessage,
  author,
  time
}) {
  return (
    h("div", {
        className: "message"
      },
      h("div", {
          className: "message__body"
        },
        h("div", null,
          bodyMessage)),
      h("div", {
          className: "message__footer"
        },
        h("span", {
          className: "message__authoring"
        }, author), " " + time))
  );
}

function ChannelNav({
  activeChannel = null,
  channels = [],
}) {
  return (
    h("ul", {
        className: "nav"
      },
      channels.map((channel) =>
        h("li", {
            className: "nav__item"
          },
          h("a", {
              className: `nav__link ${
      activeChannel && activeChannel.id === channel.id ?
      "nav__link--active" :
      ""
      }`,
              href: channel.link,
              target: "_blank",
            },
            h(ChannelLink, channel))))));
}

function ConversationNav({
  activeConversation = null,
  conversations = []
}) {
  return (
    h("ul", {
        className: "nav"
      },
      conversations.map((convo) =>
        h("li", {
            className: "nav__item"
          },
          h("a", {
              className: `nav__link ${
      activeConversation && activeConversation.id === convo.id ?
      "nav__link--active" :
      ""
      }`,
              href: "#"
            },

            h(ConversationLink, {
              conversation: convo
            }))))));
}

function ChannelLink({
  icon,
  name,
  unread
}) {
  return (
    h("span", {
        className: `channel-link ${
      unread > 0 ? "conversation-link--unread" : ""
      }`
      },

      h("span", {
        className: "channel-link__icon"
      }, "#"),
      h("span", {
        className: "channel-link__element"
      }, name),

      unread > 0 &&
      h("span", {
          className: "channel-link__element"
        },
        h(Badge, null, unread))));
}

function ConversationLink({
  conversation
}) {
  return (
    h("span", {
        className: `conversation-link ${
      conversation.isOnline ? "conversation-link--online" : ""
      } ${conversation.unread > 0 ? "conversation-link--unread" : ""}`
      },

      conversation.members && conversation.members.length > 2 ?
      h("span", {
        className: "conversation-link__icon"
      }) :

      h("span", {
        className: "conversation-link__icon"
      }),

      h("span", {
        className: "conversation-link__element"
      }, conversation.name),

      conversation.unread > 0 &&
      h("span", {
          className: "conversation-link__element"
        },
        h(Badge, null, conversation.unread))));
}

function Badge({
  children
}) {
  return h("span", {
    className: "badge"
  }, children);
}

function Button({
  children,
  type = "button",
  variant = "default"
}) {
  return (
    h("button", {
        className: `button ${variant ? `button--${variant}` : ""}`,
        type: type
      },

      h("span", {
        className: "button__content"
      }, children)));
}

function Pad({
  children,
  renderCap = null
}) {
  return (
    h("div", {
        className: "pad"
      },
      h("div", {
        className: "pad__body"
      }, children)));
}

function MakeTextBase(classNameDefault, $asDefault) {
  return ({
    $as = null,
    children,
    className
  }) => {
    const AsComponent = $as || $asDefault;

    return (
      h(AsComponent, {
          className: `${classNameDefault} ${className}`
        },
        children));
  };
}

const TextHeading1 = MakeTextBase("text-heading1", "h1");
const TextHeading2 = MakeTextBase("text-heading2", "h2");
const TextHeading3 = MakeTextBase("text-heading3", "h3");
const TextHeading4 = MakeTextBase("text-heading4", "h4");
const TextHeading5 = MakeTextBase("text-heading5", "h5");
const TextHeading6 = MakeTextBase("text-heading6", "h6");
const TextParagraph1 = MakeTextBase("text-paragraph1", "p");
const TextOverline = MakeTextBase("segment-topbar__overline", "span");

function MakeIcon(svg) {
  return ({
      className
    }) =>
    h("svg", {
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      },
      svg);
}

const IconFeedMute = MakeIcon(
  h("path", {
    d: "M18 9.5c2.481 0 4.5 1.571 4.5 3.503 0 1.674-1.703 3.48-4.454 3.48-.899 0-1.454-.156-2.281-.357-.584.358-.679.445-1.339.686.127-.646.101-.924.081-1.56-.583-.697-1.007-1.241-1.007-2.249 0-1.932 2.019-3.503 4.5-3.503zm0-1.5c-3.169 0-6 2.113-6 5.003 0 1.025.37 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.302-.234 3.15-.754 3.989-1.268.709.173 1.388.252 2.03.252 3.542 0 5.954-2.418 5.954-4.98.001-2.906-2.85-5.003-5.999-5.003zm-.668 6.5h-1.719v-.369l.938-1.361v-.008h-.869v-.512h1.618v.396l-.918 1.341v.008h.95v.505zm3.035 0h-2.392v-.505l1.306-1.784v-.011h-1.283v-.7h2.25v.538l-1.203 1.755v.012h1.322v.695zm-10.338 9.5c1.578 0 2.971-1.402 2.971-3h-6c0 1.598 1.45 3 3.029 3zm.918-7.655c-.615-1.001-.947-2.159-.947-3.342 0-3.018 2.197-5.589 5.261-6.571-.472-1.025-1.123-1.905-2.124-2.486-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.173-.939-2.123-2.097-2.123s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h9.782c.425-.834.931-1.764 1.165-2.655zm-.947-15.345c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1z"
  }));

const IconFeedSettings = MakeIcon(
  h("path", {
    d: "M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z"
  }));

const IconMenuMore = MakeIcon(
  h("path", {
    d: "M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
  }));

const IconFeedAdd = MakeIcon(h("path", {
  d: "M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"
}));

const IconShop = MakeIcon(
  h("path", {
    d: "M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"
  }));

const FIXTURES = {
  education: [{
      id: "5ba5",
      name: "Duke University",
      isPrivate: true,
      unread: 1,
      link: "https://www.duke.edu"
    },
    {
      id: "4f22",
      name: "NIT Trichy",
      unread: 1
    },
  ],

  venture: [{
      id: "5ba5",
      name: "New Stack Ventures",
    },
    {
      id: "4f22",
      name: "Alumni Ventures Group",
    },
    {
      id: "4f23",
      name: "G51",
    },
    {
      id: "4f24",
      name: "DigitalDX Ventures",
    },
  ],

  ib: [{
    id: "5ba5",
    name: "MD Global Partners",
  }, ],

  research: [{
      id: "5ba5",
      name: "MIT DCI",
      unread: 2
    },
    {
      id: "4f22",
      name: "Yale Openlab",
      unread: 1
    },
  ],

  startups: [{
      id: "5ba5",
      name: "Musicoin",
      unread: 2
    },
    {
      id: "4f22",
      name: "EDS",
      unread: 1
    },
    {
      id: "4f22",
      name: "Frrole",
      unread: 1
    },
  ],

  conversation: [{
      id: "10cf",
      isOnline: true,
      name: "Email"
    },
    {
      id: "cc23",
      isOnline: true,
      name: "Twitter"
    },
    {
      id: "95b4",
      isOnline: true,
      name: "Linkedin",
    },
    {
      id: "e466",
      name: "In Person"
    },
  ],

  messages: [{
      id: "fd0cf",
      content: "Fighting sentient AI drones and killer Robots. I think this may be the end. If you see this message, EXIT THIS SITE IMMEDIATELY. We couldn't prevent the singularity. Hey, please spare me. HEY HEY NOOOOO ARRRGHHHasdcxz,./",
      dateTime: "2077",
      author: {
        id: "d12c",
        name: "T-800"
      }
    },
    {
      id: "fd0cf",
      content: "Yeah, I need to learn finance for this. Heading to Duke",
      dateTime: "2020-08-19T09:30:12Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "I have too many ideas and come across too many. Wish I could just talk about ideas as fulltime, that would be a lot more interesting. Wait, there are people already doing this? VENTURE CAPITALISTS??",
      dateTime: "2019-10-08T22:30:40Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "Climate Change + Zero Knowledge Proofs + Auto Nuke detonation for climate change brainstorming at Yale. Have an idea for Data Privacy + Blockchains, how about I start a new company EDS",
      dateTime: "2019-06-04T22:10:20Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "Blockchains + Clean Energy + Democratized access. Buzzwordy but I think I have something. Also I can talk to the cool nerds at MIT. Maybe time to leave Musicoin and focus on this a bit more",
      dateTime: "2018-12-08T17:22:11Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "Lightning Network. Cool name, project's hosted at MIT. Going to work on it a little bit, lets see how this goes",
      dateTime: "2017-09-09T20:30:40Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "Bitcoin? Ethereum?? SMART CONTRACTS??? Need to build something cool, how about a platform for independent musicians.",
      dateTime: "2017-05-11T09:28:43Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "Looks like they are not going to teach me that after all, what should I do now (panics inside). Hey, what’s this Open Source thing?",
      dateTime: "2016-05-15T21:56:32Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "My future is in building Terminator style killer robots. Maybe not killer, I want them to be a bit more nice towards me. I think Industrial Engineering in College will teach me that",
      dateTime: "2015-08-10T22:35:11Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    },
    {
      id: "fd0c1",
      content: "Going to create the old retro game Dangerous Dave in C++ using graphics.h for a high school project. Just a random guy jumping around obstacles, how long can this take?",
      dateTime: "2014-08-01T23:18:22Z",
      author: {
        id: "d12c",
        name: "VG"
      }
    }
  ]
};

render(h(App, null), document.getElementById("root"));
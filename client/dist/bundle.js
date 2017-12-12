/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  // actions
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  VOTE: 'VOTE',
  COMMENT: 'COMMENT',

  // sort
  TRENDING: 'TRENDING',
  TOP: 'TOP',
  NEW: 'NEW',

  // statuses
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  COMPLETE: 'COMPLETE'
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/hyperapp/src/index.js
function app(props, container) {
  var lock
  var root = (container = container || document.body).children[0]
  var node = vnode(root, [].map)
  var lifecycle = []
  var appState = props.state || {}
  var appActions = {}

  repaint(init(appState, appActions, props.actions, []))

  return appActions

  function vnode(element, map) {
    return (
      element &&
      h(
        element.tagName.toLowerCase(),
        {},
        map.call(element.childNodes, function(element) {
          return element.nodeType === 3
            ? element.nodeValue
            : vnode(element, map)
        })
      )
    )
  }

  function set(to, from) {
    for (var i in from) {
      to[i] = from[i]
    }
    return to
  }

  function merge(to, from) {
    return set(set({}, to), from)
  }

  function setDeep(path, value, from) {
    var to = {}
    return 0 === path.length
      ? value
      : ((to[path[0]] =
          1 < path.length
            ? setDeep(path.slice(1), value, from[path[0]])
            : value),
        merge(from, to))
  }

  function get(path, from) {
    for (var i = 0; i < path.length; i++) {
      from = from[path[i]]
    }
    return from
  }

  function isFunction(any) {
    return "function" === typeof any
  }

  function init(state, actions, from, path) {
    for (var key in from) {
      isFunction(from[key])
        ? (function(key, action) {
            actions[key] = function(data) {
              state = get(path, appState)

              if (
                isFunction((data = action(data))) &&
                isFunction((data = data(state)))
              ) {
                data = data(actions)
              }

              if (data && data !== state && !data.then) {
                repaint(
                  (appState = setDeep(path, merge(state, data), appState))
                )
              }

              return data
            }
          })(key, from[key])
        : init(
            state[key] || (state[key] = {}),
            (actions[key] = {}),
            from[key],
            path.concat(key)
          )
    }
  }

  function getKey(node) {
    if (node && node.props) {
      return node.props.key
    }
  }

  function setElementProp(element, name, value, oldValue) {
    if (name === "key") {
    } else if (name === "style") {
      for (var i in merge(oldValue, (value = value || {}))) {
        element.style[i] = null == value[i] ? "" : value[i]
      }
    } else {
      try {
        element[name] = null == value ? "" : value
      } catch (_) {}

      if (!isFunction(value)) {
        if (null == value || false === value) {
          element.removeAttribute(name)
        } else {
          element.setAttribute(name, value)
        }
      }
    }
  }

  function createElement(node, isSVG) {
    if (typeof node === "string") {
      var element = document.createTextNode(node)
    } else {
      var element = (isSVG = isSVG || node.type === "svg")
        ? document.createElementNS("http://www.w3.org/2000/svg", node.type)
        : document.createElement(node.type)

      if (node.props.oncreate) {
        lifecycle.push(function() {
          node.props.oncreate(element)
        })
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(createElement(node.children[i], isSVG))
      }

      for (var i in node.props) {
        setElementProp(element, i, node.props[i])
      }
    }
    return element
  }

  function updateElement(element, oldProps, props) {
    for (var i in merge(oldProps, props)) {
      var value = props[i]
      var oldValue = i === "value" || i === "checked" ? element[i] : oldProps[i]

      if (value !== oldValue) {
        setElementProp(element, i, value, oldValue)
      }
    }

    if (props.onupdate) {
      lifecycle.push(function() {
        props.onupdate(element, oldProps)
      })
    }
  }

  function removeElement(parent, element, props) {
    function done() {
      parent.removeChild(element)
    }

    if (props && props.onremove) {
      props.onremove(element, done)
    } else {
      done()
    }
  }

  function patch(parent, element, oldNode, node, isSVG, nextSibling) {
    if (oldNode === node) {
    } else if (null == oldNode) {
      element = parent.insertBefore(createElement(node, isSVG), element)
    } else if (node.type != null && node.type === oldNode.type) {
      updateElement(element, oldNode.props, node.props)

      isSVG = isSVG || node.type === "svg"

      var len = node.children.length
      var oldLen = oldNode.children.length
      var oldKeyed = {}
      var oldElements = []
      var keyed = {}

      for (var i = 0; i < oldLen; i++) {
        var oldElement = (oldElements[i] = element.childNodes[i])
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)

        if (null != oldKey) {
          oldKeyed[oldKey] = [oldElement, oldChild]
        }
      }

      var i = 0
      var j = 0

      while (j < len) {
        var oldElement = oldElements[i]
        var oldChild = oldNode.children[i]
        var newChild = node.children[j]

        var oldKey = getKey(oldChild)
        if (keyed[oldKey]) {
          i++
          continue
        }

        var newKey = getKey(newChild)
        var keyedNode = oldKeyed[newKey] || []

        if (null == newKey) {
          if (null == oldKey) {
            patch(element, oldElement, oldChild, newChild, isSVG)
            j++
          }
          i++
        } else {
          if (oldKey === newKey) {
            patch(element, keyedNode[0], keyedNode[1], newChild, isSVG)
            i++
          } else if (keyedNode[0]) {
            element.insertBefore(keyedNode[0], oldElement)
            patch(element, keyedNode[0], keyedNode[1], newChild, isSVG)
          } else {
            patch(element, oldElement, null, newChild, isSVG)
          }

          j++
          keyed[newKey] = newChild
        }
      }

      while (i < oldLen) {
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)
        if (null == oldKey) {
          removeElement(element, oldElements[i], oldChild.props)
        }
        i++
      }

      for (var i in oldKeyed) {
        var keyedNode = oldKeyed[i]
        var reusableNode = keyedNode[1]
        if (!keyed[reusableNode.props.key]) {
          removeElement(element, keyedNode[0], reusableNode.props)
        }
      }
    } else if (element && node !== element.nodeValue) {
      if (typeof node === "string" && typeof oldNode === "string") {
        element.nodeValue = node
      } else {
        element = parent.insertBefore(
          createElement(node, isSVG),
          (nextSibling = element)
        )
        removeElement(parent, nextSibling, oldNode.props)
      }
    }

    return element
  }

  function render(next) {
    lock = !lock

    if (isFunction((next = props.view(appState)))) {
      next = next(appActions)
    }

    if (!lock) {
      root = patch(container, root, node, (node = next))
    }

    while ((next = lifecycle.pop())) next()
  }

  function repaint() {
    if (props.view && !lock) {
      setTimeout(render, (lock = !lock))
    }
  }
}

function h(type, props) {
  var node
  var stack = []
  var children = []

  for (var i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }

  while (stack.length) {
    if (Array.isArray((node = stack.pop()))) {
      for (i = node.length; i--; ) {
        stack.push(node[i])
      }
    } else if (null == node || node === true || node === false) {
    } else {
      children.push(typeof node === "number" ? (node = node + "") : node)
    }
  }

  return typeof type === "string"
    ? {
        type: type,
        props: props || {},
        children: children
      }
    : type(props || {}, children)
}

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/init-middleware.js
/**
 * Chain a bunch of middleware together
 */
const initMiddleware = (middlewares, store, final) => {
    const withStore = middlewares.map(mid => mid(store)); // give each middleware the store
    const reversed = withStore.reverse();
    return reversed.reduce(// set up each middleware to call the next
    (next, mid) => mid(next), final // the final middleware calls final(action)
    );
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/subscription.js
const createSubscription = () => {
    // all of the listeners that have subscribed
    let subscribers = [];
    // add a listener, and return a function to remove that listener
    const subscribe = (listener) => {
        subscribers.push(listener);
        return () => {
            subscribers = subscribers.filter(subscriber => subscriber !== listener);
        };
    };
    // send a message to all listeners
    const publish = (...args) => {
        subscribers.forEach(subscriber => subscriber(...args));
    };
    // public interface
    return { subscribe, publish };
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/store.js


/**
 * A store holds sate, and provides an interface to dispatch actions that
 * act on that state
 */
const createStore = (reducer, initialState = undefined, middlewares = []) => {
    let state = reducer(initialState, {});
    let applyMiddleware;
    const subscription = createSubscription();
    const dispatch = (action) => {
        applyMiddleware(action); // applyMiddleware will evantually call applyAction
    };
    const applyAction = (action) => {
        state = reducer(state, action);
        subscription.publish(state, action);
    };
    const getState = () => {
        return state;
    };
    const store = { dispatch, getState, subscribe: subscription.subscribe };
    const setMiddleware = (middlewares) => {
        applyMiddleware = initMiddleware(middlewares, store, applyAction);
    };
    setMiddleware(middlewares);
    return store;
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/allow-actions.js
/**
 * Whitelist of actions to allow through to the subReducer
 */
const createAllowActions = (subReducer, allowedActions) => {
    const defaultState = subReducer(undefined, {});
    return (state = defaultState, action) => {
        if (allowedActions.indexOf(action.type) === -1)
            return state;
        return subReducer(state, action);
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/for-each.js
/*
 * This does the same thing as Array.forEach, but for objects
 * It's probably best not to use this with arrays, because the index keys
 * will be strings
 */
const forEach = (obj, func) => {
    Object.keys(obj).forEach(key => func(obj[key], key));
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/reduce.js

/**
 * A version of reduce that works with objects
 */
const reduce = (obj, func, collector) => {
    forEach(obj, (value, key) => collector = func(collector, value, key));
    return collector;
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/combine-reducers.js

/**
 * Take a collection of reducers to produce a single reducer
 */
const combineReducers = (reducerDict) => {
    return (state = {}, action) => {
        return reduce(reducerDict, (state, reducer, key) => {
            return Object.assign({}, state, { [key]: reducer(state[key], action) });
        }, state);
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/get.js
/**
 * Return the value of a path
 */
const get = (value, path = '') => {
    if (!path)
        return value;
    if (!Array.isArray(path))
        path = path.split('.');
    return path.reduce((value, key) => value ? value[key] : undefined, value);
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/dictionary.js

/**
 * Factory to create a dict reducer that stores sub-states by key,
 * and updates those sub-states using the provided reducer
 */
const createDictionary = (reducer, idKey) => {
    return (state = {}, action) => {
        const id = get(action, idKey);
        if (!id)
            return state;
        const subState = reducer(state[id], action);
        const newState = Object.assign({}, state);
        if (subState === undefined) {
            delete newState[id];
        }
        else {
            newState[id] = subState;
        }
        return newState;
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/patcher.js
const SET = 'patcher/SET';
/**
 * A very simple reducer that conbines the old state with whatever new values
 * you provide
 */
const patcher = (state = {}, action) => {
    switch (action.type) {
        case SET:
            if (typeof action.set !== 'object')
                return state;
            return Object.assign({}, state, action.set);
        default:
            return state;
    }
};
const patcherActionCreators = {
    set: (obj) => ({ type: SET, set: obj })
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/constants/action-types.js
const JOIN_ROOM = 'jiber/JOIN_ROOM';
const LEAVE_ROOM = 'jiber/LEAVE_ROOM';
const CONFIRMED_STATE = 'jiber/CONFIRMED_STATE';
const CLOSE_ROOM = 'jiber/CLOSE_ROOM';
const ADD_USER = 'jiber/ADD_USER';
const REMOVE_USER = 'jiber/REMOVE_USER';
const LOGIN_RESULT = 'jiber/LOGIN_RESULT';
const INIT_SOCKET = 'jiber/INIT_SOCKET';
const REMOVE_SOCKET = 'jiber/REMOVE_SOCKET';
const WEBRTC_OFFER = 'jiber/WEBRTC_OFFER';
const WEBRTC_ANSWER = 'jiber/WEBRTC_ANSWER';
const WEBRTC_CANDIDATE = 'jiber/WEBRTC_CANDIDATE';

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/user.js

/**
 * Keep track of the users that are connected to the server
 */
const user_user = (state, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.user;
        case REMOVE_USER:
            return undefined;
        default:
            return state;
    }
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/constants/sources.js
const SERVER = 'SERVER';
const PEER = 'PEER';
const SELF = 'SELF';

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/member.js

/**
 * Keep track of a user who has joined this room
 */
const member = (state, action) => {
    switch (action.type) {
        case JOIN_ROOM:
            return Object.assign({}, action.$user);
        case LEAVE_ROOM:
            return undefined;
        default:
            if (!state)
                return state;
            if (!action.$confirmed)
                return state;
            const newActionId = action.$actionId || 0;
            const oldActionId = state.actionId || 0;
            if (newActionId <= oldActionId)
                return state;
            return Object.assign({}, state, { actionId: newActionId });
    }
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/members.js




const memberDict = createDictionary(member, '$userId');
const members_members = (state = {}, action) => {
    if (action.type === CONFIRMED_STATE && action.$source === SERVER) {
        return action.members;
    }
    return memberDict(state, action);
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/last-updated-at.js
/**
 * Keep track of when the store was updated lastUpdatedAt
 */
const lastUpdatedAt = (state = 0, action) => {
    return action.$timeMs || state;
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/confirmed.js

/**
 * State that has been confirmed
 * Only confirmed actions should be passed to this reducer
 */
const createConfirmed = (subReducer) => {
    return (state = undefined, action) => {
        switch (action.type) {
            case CONFIRMED_STATE:
                return action.confirmed;
            default:
                if (action.$confirmed) {
                    return subReducer(state, action);
                }
                return state;
        }
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/reducers/room.js





/**
 * A room stores confirmedState, who is a member, and when
 * the last update was
 */
const room_createRoom = (subReducer) => {
    const coreReducer = combineReducers({
        members: members_members,
        lastUpdatedAt: lastUpdatedAt,
        confirmed: createConfirmed(subReducer)
    });
    return (state, action) => {
        switch (action.type) {
            case CLOSE_ROOM:
                return undefined;
            default:
                return coreReducer(state, action);
        }
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/set.js
/**
 * Set a value at path
 */
const set = (obj, path, value) => {
    if (!path)
        return value;
    if (!Array.isArray(path))
        path = path.split('.');
    if (path.length === 0)
        return value;
    const [key, ...remainingKeys] = path;
    const oldValue = obj[key] || {};
    const newValue = set(oldValue, remainingKeys, value);
    if (Array.isArray(obj)) {
        const newArr = [...obj];
        newArr[Number(key)] = newValue;
        return newArr;
    }
    else {
        return Object.assign({}, obj, { [key]: newValue });
    }
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/del.js

/**
 * remove a key from a collection
 */
const del = (obj, path = '') => {
    return set(obj, path, undefined);
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/utils/map.js

/*
 * This does the same thing as Array.map, but for objects
 * If used with an array, the indexes will be treated as strings
 */
const map = (obj, func) => {
    const results = {};
    forEach(obj, (value, key) => results[key] = func(value, key));
    return results;
};

// CONCATENATED MODULE: ./node_modules/jiber-core/dist/es6/index.js

















// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/middleware/send-to-server.js
/**
 * Send locally dispatched actions to the server for confirmation
 */
const createSendToServer = (send) => {
    return () => (next) => (action) => {
        if (!action.$confirmed && !action.$userId)
            send(action);
        next(action);
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/middleware/add-action-id.js
/**
 * Create an incrementing actionId
 */
let nextActionId = 1;
const addActionId = () => (next) => (action) => {
    if (!action.$actionId) {
        action.$actionId = nextActionId++;
    }
    return next(action);
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/middleware/inject-metadata.js

/**
 * userId and timeMs are added to create consistency between
 * optimistic and confirmed actions
 * todo: this is too complicated, and I don't understand it any more
 */
let inject_metadata_nextActionId = 1;
const injectMetadata = (store) => {
    return (next) => (action) => {
        // sanity checks
        const roomId = action.$roomId;
        const state = store.getState();
        if (!roomId || !state.rooms[roomId])
            return next(action);
        // fill in missing data
        if (!action.$actionId)
            action.$actionId = inject_metadata_nextActionId++;
        if (!action.$timeMs)
            action.$timeMs = new Date().getTime();
        if (!action.$source)
            action.$source = SELF;
        // if there is no $userId, then this action was created by the current user
        if (action.$userId) {
            const room = state.rooms[roomId];
            action.$user = room.members[action.$userId] || action.$user;
        }
        else if (state.me) {
            action.$userId = state.me.userId;
            action.$user = state.me;
        }
        return next(action);
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/tough-socket/try-to-connect.js
/**
 * Try to create a connection to the server
 */
const tryToConnect = (settings) => {
    const { url, credential, backoffMs } = settings;
    if (!url)
        return Promise.reject('NO_URL');
    return new Promise((resolve) => {
        const onopen = (socket) => {
            delete socket.onclose;
            delete socket.onopen;
            resolve(socket);
        };
        const connect = (retryCount = 0) => {
            const delay = retryCount * backoffMs;
            setTimeout(() => {
                const socket = new WebSocket(url, credential);
                socket.onclose = () => connect(retryCount + 1);
                socket.onopen = () => onopen(socket);
            }, delay);
        };
        connect();
    });
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/tough-socket/tough-socket.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Create an always retrying socket connection
 * Handle incoming messages with onMessage
 */
const createToughSocket = (settings) => {
    let socket;
    const self = {
        send: (str) => {
            if (!socket || socket.readyState !== socket.OPEN)
                return;
            socket.send(str);
        }
    };
    const connect = () => __awaiter(this, void 0, void 0, function* () {
        socket = yield tryToConnect(settings);
        if (self.onmessage)
            socket.onmessage = self.onmessage;
        socket.onclose = () => setTimeout(connect, 3000);
    });
    connect(); // tslint:disable-line
    return self;
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/tough-socket/index.js


// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/to-dispatchers.js

/**
 * turn some action creators into handy dandy action dispatchers
 */
const toDispatchers = (dispatch, creators) => {
    return map(creators, creator => {
        return (...params) => dispatch(creator(...params));
    });
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/room.js


/**
 * Create a room interface to make some code more convinient
 */
const createCreateRoom = (store, actionCreators = {}) => {
    return (roomId) => {
        const getRoom = () => {
            const state = store.getState();
            return state.rooms[roomId];
        };
        const dispatch = (action) => {
            store.dispatch(Object.assign({}, action, { $roomId: roomId }));
        };
        const getState = () => get(getRoom(), 'optimistic');
        const getConfirmedState = () => get(getRoom(), 'confirmed');
        const actionDispatchers = toDispatchers(dispatch, actionCreators);
        dispatch({ type: JOIN_ROOM });
        // subscribe to events that target this room
        const subscription = createSubscription();
        store.subscribe((state, action) => {
            if (action && action.$roomId === roomId) {
                subscription.publish(state.rooms[roomId].optimistic, action);
            }
        });
        return Object.assign({}, actionDispatchers, { dispatch,
            getState,
            getConfirmedState, subscribe: subscription.subscribe });
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/default-client-settings.js

/**
 * Default settings
 */
const defaultClientSettings = {
    reducer: patcher,
    middleware: [],
    url: undefined,
    stunServers: ['stun:stun.jiber.io'],
    credential: undefined,
    initialState: undefined,
    backoffMs: 5000,
    actionCreators: patcherActionCreators,
    maxPeers: 10
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/reducers/client-room/pending-actions.js

/**
 * Remove actions that have the same userId, and a lesser or equal actionId
 * Actions with no $user are assumed to belong to the currently logged in user
 */
const pruneOld = (pendingActions, action) => {
    return pendingActions.filter(pendingAction => {
        if (!pendingAction.$userId)
            return false;
        if (pendingAction.$userId !== action.$userId)
            return true;
        return (pendingAction.$actionId || 0) > (action.$actionId || 0);
    });
};
/**
 * add a new pending action if it is newer than the last confirmed action
 * received for this user
 */
const addNew = (pendingActions, action) => {
    // ignore JOIN_ROOM and LEAVE_ROOM actions, rejoin-rooms.ts handles that
    if (action.type === JOIN_ROOM || action.type === LEAVE_ROOM) {
        return pendingActions;
    }
    // if the user is not set, then we made this action but are not logged in yet
    if (!action.$user)
        return [...pendingActions, action];
    // only accept optimistic actions that are newer than the confirmed actions
    if ((action.$actionId || 0) > (action.$user.actionId || 0)) {
        return [...pendingActions, action];
    }
    else {
        return pendingActions;
    }
};
/**
 * Keep optimistic actions that have not been confirmed by the server yet
 */
const pending_actions_pendingActions = (state = [], action) => {
    switch (action.type) {
        // Remove all pending actions
        case CONFIRMED_STATE:
            return [];
        // Remove pending actions belonging to userId if they leave the room
        case LEAVE_ROOM:
            return state.filter(pendingAction => pendingAction.$userId !== action.$userId);
        // Add or remove specific pending actions
        default:
            return action.$confirmed ? pruneOld(state, action) : addNew(state, action);
    }
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/reducers/client-room/optimistic.js

/**
 * Use the current room state along with the action to calculate
 * a state that will be correct, assuming the server ends up confirming
 * all of the optimistic actions
 */
const createOptimistic = (subReducer) => {
    return (roomState, action) => {
        const state = roomState.optimistic;
        if (action.type === CONFIRMED_STATE) {
            const { pendingActions } = roomState;
            return pendingActions.reduce(subReducer, roomState.confirmed);
        }
        const curActionId = get(action, '$user.actionId') || 0;
        const actionId = action.$actionId || 0;
        if (action.$confirmed) {
            const { pendingActions, confirmed } = roomState;
            return pendingActions.reduce(subReducer, confirmed);
        }
        else if (actionId > curActionId) {
            return subReducer(state, action);
        }
        else {
            return state;
        }
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/reducers/client-room/client-room.js



const defaultState = {
    lastUpdatedAt: 0,
    members: {},
    confirmed: undefined,
    optimistic: undefined,
    pendingActions: []
};
/**
 * Calculates a confirmed state,
 * then uses the confirmed state to calculate an optimistic state
 */
const createClientRoom = (subReducer) => {
    const roomReducer = room_createRoom(subReducer);
    const optimistic = createOptimistic(subReducer);
    return (state = defaultState, action) => {
        const newState = roomReducer(state, action);
        newState.pendingActions = pending_actions_pendingActions(newState.pendingActions, action);
        newState.optimistic = optimistic(newState, action);
        return newState;
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/reducers/me.js

/**
 * Keep track of the currently logged in user
 */
const me_me = (state = { userId: '$timeMsemp' }, action) => {
    switch (action.type) {
        case LOGIN_RESULT:
            return action.user;
        default:
            return state;
    }
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/client-reducer.js



/**
 * Top level reducer for the client
 */
const createClientReducer = (subReducer) => {
    const room = createClientRoom(subReducer);
    const rooms = createDictionary(room, '$roomId');
    const clientReducer = combineReducers({ rooms, me: me_me });
    return clientReducer;
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/channel.js
/**
 * Typescript doesn't seem to include RTCDataChannel by default
 * so I'm using 'any' types in a few places
 * 'pc' is short for peerConnection
 */
const createChannel = (pc, isInitiator) => {
    let channel;
    const send = (action) => {
        if (channel && channel.readyState === 'open') {
            const smallerAction = Object.assign({}, action, { $user: undefined, $userId: undefined, $timeMs: undefined });
            channel.send(JSON.stringify(smallerAction));
        }
    };
    const self = {
        send
    };
    const setupChannel = (channel) => {
        channel.onmessage = (message) => {
            if (self.onmessage)
                self.onmessage(message);
        };
    };
    if (isInitiator) {
        const channelConfig = { ordered: false, maxRetransmits: 0 };
        channel = pc.createDataChannel('data', channelConfig);
        setupChannel(channel);
    }
    else {
        pc.ondatachannel = (event) => {
            channel = event.channel;
            setupChannel(channel);
        };
    }
    return self;
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/should-peer.js

/**
 * Is this action relavent for this particular peer?
 */
const shouldPeer = (state, peerUserId, action) => {
    if (!action.$roomId)
        return false;
    if (action.$source !== SELF)
        return false;
    const room = state.rooms[action.$roomId];
    if (!room.members[peerUserId])
        return false;
    return true;
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/utils/error-handler.js
const errorHandler = (e) => console.log(e);

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/negotiator.js
var negotiator___awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Handle the initial negotiation needed to establish the peer connection
 */
const createNegotiator = (dispatch, pc, peerUserId, offer) => {
    const sendOffer = () => negotiator___awaiter(this, void 0, void 0, function* () {
        const offer = yield pc.createOffer();
        yield pc.setLocalDescription(offer);
        dispatch({ type: WEBRTC_OFFER, offer, peerUserId });
    });
    const sendAnswer = (pc) => negotiator___awaiter(this, void 0, void 0, function* () {
        const answer = yield pc.createAnswer();
        yield pc.setLocalDescription(answer);
        dispatch({ type: WEBRTC_ANSWER, answer, peerUserId });
    });
    const sendCandidate = (candidate) => {
        dispatch({ type: WEBRTC_CANDIDATE, candidate, peerUserId });
    };
    const acceptOffer = (offer) => negotiator___awaiter(this, void 0, void 0, function* () {
        yield pc.setRemoteDescription(offer);
        return sendAnswer(pc);
    });
    const onAction = (action) => negotiator___awaiter(this, void 0, void 0, function* () {
        if (!action.$confirmed)
            return;
        if (action.$userId !== peerUserId)
            return;
        switch (action.type) {
            case WEBRTC_ANSWER:
                return pc.setRemoteDescription(action.answer);
            case WEBRTC_CANDIDATE:
                return pc.addIceCandidate(action.candidate);
        }
    });
    pc.onicecandidate = (event) => {
        if (!event.candidate)
            return;
        sendCandidate(event.candidate);
    };
    if (offer) {
        acceptOffer(offer).catch(errorHandler);
    }
    else {
        sendOffer().catch(errorHandler);
    }
    return {
        onAction
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/on-peer-message.js

const onPeerMessage = (store, peerUserId, event) => {
    const action = JSON.parse(event.data);
    const roomId = action.$roomId;
    if (!roomId)
        return;
    // make sure the user is a member of this room
    const room = store.getState().rooms[roomId];
    const members = room.members;
    const user = members[peerUserId];
    if (!user)
        return;
    // add some metadata to the action
    action.$timeMs = new Date().getTime();
    action.$userId = peerUserId;
    action.$source = PEER;
    action.$user = user;
    // optimistic
    store.dispatch(action);
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/peer.js





const createPC = (stunServers) => {
    const config = {
        iceServers: stunServers.map(url => ({ urls: url }))
    };
    return new RTCPeerConnection(config);
};
const createPeer = (peerUserId, store, settings, offer) => {
    // pc is short for peerConnection
    const pc = createPC(settings.stunServers);
    const channel = createChannel(pc, !offer);
    const negotiator = createNegotiator(store.dispatch, pc, peerUserId, offer);
    channel.onmessage = (message) => {
        onPeerMessage(store, peerUserId, message);
    };
    const unsubscribe = store.subscribe((action) => {
        negotiator.onAction(action).catch(errorHandler);
        const state = store.getState();
        if (shouldPeer(state, peerUserId, action))
            channel.send(action);
    });
    const close = () => {
        unsubscribe();
        pc.close();
    };
    return {
        peerUserId,
        close
    };
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/prefix-fix.js
/**
 * standardize browser prefixes
 */
const prefixFix = () => {
    const w = window;
    const fields = [
        'RTCPeerConnection',
        'RTCIceCandidate',
        'RTCSessionDescription'
    ];
    fields.forEach(field => {
        w[field] = w[field] || w[`moz${field}`] || w[`webkit${field}`];
    });
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/peer-manager.js



/**
 * When we join a room, existing members send us offers (WEBRTC_OFFER)
 * When another user joins, we send an offer (we are now an existing member)
 */
const createPeerManager = (store, settings) => {
    // standardize browser prefixes
    prefixFix();
    //
    const connections = {};
    // create a list of all userIds that you should be connected to
    const toAllMembers = (state) => {
        return reduce(state.rooms, (members, room) => {
            return Object.assign(members, room.members);
        }, {});
    };
    // remove a connection that we no longer want
    const remove = (userId) => {
        const connection = connections[userId];
        if (!connection)
            return;
        connection.close();
        delete connections[userId];
    };
    // remove connections we no longer want
    const removeUnusedConnections = () => {
        const allMembers = toAllMembers(store.getState());
        forEach(connections, connection => {
            if (!allMembers[connection.peerUserId])
                remove(connection.peerUserId);
        });
    };
    // add a new connection
    const addConnection = (userId, offer) => {
        if (connections[userId])
            return;
        if (Object.keys(connections).length >= settings.maxPeers)
            return;
        connections[userId] = createPeer(userId, store, settings, offer);
    };
    // add and remove connections as needed
    store.subscribe((action) => {
        if (!action.$confirmed)
            return;
        switch (action.type) {
            case LEAVE_ROOM:
                return removeUnusedConnections();
            case JOIN_ROOM:
                if (!action.$userId)
                    return;
                if (action.$userId === store.getState().me.userId)
                    return;
                return addConnection(action.$userId);
            case WEBRTC_OFFER:
                if (!action.$userId)
                    return;
                return addConnection(action.$userId, action.offer);
        }
    });
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/webrtc/index.js


// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/action-handler.js

/**
 * Trigger special behaviors for certain actions from the server
 */
const actionHandler = (sendAction, getState, action) => {
    switch (action.type) {
        // rejoin rooms
        case LOGIN_RESULT: {
            const state = getState();
            forEach(state.rooms, (_room, roomId) => {
                sendAction({ type: JOIN_ROOM, $roomId: roomId });
            });
            return;
        }
        // resend pending actions
        case CONFIRMED_STATE: {
            if (!action.$roomId)
                return;
            const state = getState();
            const room = state.rooms[action.$roomId];
            if (room)
                room.pendingActions.forEach(sendAction);
            return;
        }
    }
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/client-store.js










/**
 * When creating a client store, add middleware to send actions to the server
 * and peers
 */
const createClientStore = (optionInput = {}) => {
    const options = Object.assign({}, defaultClientSettings, optionInput);
    const clientReducer = createClientReducer(options.reducer);
    const toughSocket = createToughSocket(options);
    const sendAction = (action) => toughSocket.send(JSON.stringify(action));
    const sendToServer = createSendToServer(sendAction);
    const middleware = [
        ...options.middleware,
        addActionId,
        sendToServer,
        injectMetadata
    ];
    const store = createStore(clientReducer, options.initialState, middleware);
    const createRoom = createCreateRoom(store, options.actionCreators);
    const clientStore = Object.assign({}, store, { createRoom });
    toughSocket.onmessage = (event) => {
        const action = JSON.parse(event.data);
        action.$confirmed = true;
        action.$source = SERVER;
        actionHandler(sendAction, store.getState, action);
        store.dispatch(action);
    };
    createPeerManager(store, options);
    return clientStore;
};

// CONCATENATED MODULE: ./node_modules/jiber-client/dist/es6/index.js



// EXTERNAL MODULE: ../shared/reducer.js
var shared_reducer = __webpack_require__(3);
var reducer_default = /*#__PURE__*/__webpack_require__.n(shared_reducer);

// CONCATENATED MODULE: ./src/store.js



const store_store = createClientStore({ url: 'ws:\\localhost:3000', reducer: reducer_default.a });
const store_room = store_store.createRoom('test');

// EXTERNAL MODULE: ../shared/constants.js
var constants = __webpack_require__(0);
var constants_default = /*#__PURE__*/__webpack_require__.n(constants);

// CONCATENATED MODULE: ./src/utils/is-logged-in.js
const isLoggedIn = me => {
  return me && me.provider;
};
// CONCATENATED MODULE: ./src/utils/router.js
let hyper;

const router_goto = path => {
  window.history.pushState(undefined, `UpSense ${path}`, path);
  if (hyper) {
    hyper.setPath(path);
  }
};

const init = _hyper => {
  hyper = _hyper;
  hyper.setPath(window.location.pathname || '/');
  window.onpopstate = e => {
    const path = e.pathname || window.location.pathname || '/';
    hyper.setPath(path);
  };
};
// CONCATENATED MODULE: ./src/actions/index.js





const actions_actions = {
  createPost: ({ title, description }) => state => {
    if (!isLoggedIn(state.me)) return router_goto('/login');
    const postId = title.replace(/\W/g, '-').toLowerCase();
    store_room.dispatch({ type: constants["CREATE"], title, postId, description });
    return Object.assign({}, state, { posts: store_room.getState(), path: '/' });
  },

  vote: postId => state => {
    if (!isLoggedIn(state.me)) return router_goto('/login');
    store_room.dispatch({ type: constants["VOTE"], postId });
    return Object.assign({}, state, { posts: store_room.getState() });
  },

  addComment: ({ postId, text }) => state => {
    if (!isLoggedIn(state.me)) return router_goto('/login');
    store_room.dispatch({ type: constants["COMMENT"], postId, text });
    return Object.assign({}, state, { posts: store_room.getState() });
  },

  updateData: serverState => state => {
    const roomState = serverState.rooms['test'].confirmed; // todo: set roomName variable
    return Object.assign({}, state, { me: serverState.me }, { posts: roomState });
  },

  sort: event => state => Object.assign({}, state, { sort: event.target.value }),

  setPath: path => state => {
    return Object.assign({}, state, { path });
  }
};


// CONCATENATED MODULE: ./src/components/post-create.js
 // eslint-disable-line no-unused-vars

/* harmony default export */ var post_create = (({ createPost, goto }) => h(
  'div',
  { 'class': 'post-create' },
  h(
    'div',
    { 'class': 'top' },
    h(
      'h2',
      null,
      'Create a Post'
    ),
    h(
      'button',
      { 'class': 'btn btn-text', onclick: () => goto('/') },
      'See All Posts'
    )
  ),
  h(
    'div',
    { 'class': 'fake-field' },
    h(
      'div',
      { 'class': 'title' },
      'Title'
    ),
    h('input', { 'class': 'input', id: 'title-field', type: 'text', placeholder: 'Short, descriptive title' })
  ),
  h(
    'div',
    { 'class': 'fake-field' },
    h(
      'div',
      { 'class': 'title' },
      'Details'
    ),
    h('textarea', { 'class': 'input', id: 'description-field', placeholder: 'Any additional details...', rows: '3' })
  ),
  h(
    'button',
    { 'class': 'btn btn-text btn-primary create-post', onclick: () => createPost({
        title: document.getElementById('title-field').value,
        description: document.getElementById('description-field').value
      }) },
    'Create Post'
  )
));
// CONCATENATED MODULE: ./src/components/post.js
 // eslint-disable-line no-unused-vars

/* harmony default export */ var components_post = (post => h(
  'div',
  { 'class': 'post' },
  h(
    'div',
    { 'class': 'vote', onclick: () => post.vote(post.postId) },
    h('div', { 'class': 'arrow-up' }),
    post.total
  ),
  h(
    'div',
    { 'class': 'content', onclick: () => post.goto(`/posts/${post.postId}`) },
    h(
      'div',
      { 'class': 'title' },
      post.title
    ),
    h(
      'div',
      { 'class': 'description' },
      post.description
    )
  ),
  h(
    'div',
    { 'class': 'comments', onclick: () => post.goto(`/posts/${post.postId}`) },
    h(
      'svg',
      { fill: '#ccc', height: '24', width: '24' },
      h('path', { d: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z' }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ),
    '\xA0',
    post.comments.length
  )
));
// CONCATENATED MODULE: ./src/components/post-list.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

 // eslint-disable-line no-unused-vars


/* harmony default export */ var post_list = (({ posts, vote, goto }) => {
  const postArr = Object.values(posts);
  if (postArr.length > 0) {
    return h(
      'ul',
      { 'class': 'post-list' },
      postArr.map(post => h(
        'li',
        null,
        h(components_post, _extends({}, post, { vote: vote, goto: goto }))
      ))
    );
  } else {
    return h(
      'span',
      null,
      'No posts yet...'
    );
  }
});
// CONCATENATED MODULE: ./src/components/comment.js
 // eslint-disable-line no-unused-vars

/* harmony default export */ var components_comment = (({ user, text }) => h(
  'div',
  { 'class': 'comment' },
  h(
    'div',
    { 'class': 'name' },
    user.name || user.userId
  ),
  h(
    'div',
    { 'class': 'text' },
    text
  )
));
// CONCATENATED MODULE: ./src/components/post-inspect.js
 // eslint-disable-line no-unused-vars


/* harmony default export */ var post_inspect = (({ post, goto, vote, addComment, editPost }) => {
  const output = h(
    'div',
    { 'class': 'post-inspect' },
    h(
      'button',
      { 'class': 'btn btn-text', onclick: () => goto('/') },
      'Back to All Posts'
    ),
    h(
      'div',
      { 'class': 'top' },
      h(
        'div',
        { 'class': 'vote', onclick: () => vote(post.postId) },
        h('div', { 'class': 'arrow-up' }),
        post.total
      ),
      h(
        'div',
        { 'class': 'title' },
        post.title
      )
    ),
    h(components_comment, { user: post.owner, text: post.description }),
    post.comments.map(comment => h(components_comment, comment)),
    h('input', { id: 'comment-box', type: 'text', placeholder: 'Add a comment...', onkeydown: e => {
        if (e.keyCode === 13) {
          const box = document.getElementById('comment-box');
          const text = box.value;
          box.value = '';
          addComment({ postId: post.postId, text });
        }
      } })
  );

  return output;
});
// CONCATENATED MODULE: ./src/components/controls.js
 // eslint-disable-line no-unused-vars



/* harmony default export */ var controls = (({ goto, sort, me }) => h(
  'div',
  { 'class': 'controls' },
  h(
    'div',
    { 'class': 'showing' },
    'Showing \xA0',
    h(
      'select',
      { onchange: sort },
      h(
        'option',
        { value: constants_default.a.TRENDING },
        'Trending'
      ),
      h(
        'option',
        { value: constants_default.a.TOP },
        'Top'
      ),
      h(
        'option',
        { value: constants_default.a.NEW },
        'New'
      ),
      h(
        'option',
        { value: constants_default.a.PLANNED },
        'Planned'
      ),
      h(
        'option',
        { value: constants_default.a.IN_PROGRESS },
        'In Progress'
      ),
      h(
        'option',
        { value: constants_default.a.COMPLETE },
        'Complete'
      ),
      h(
        'option',
        { value: constants_default.a.CLOSED },
        'Closed'
      )
    )
  ),
  h(
    'div',
    { 'class': 'group' },
    h(
      'button',
      { 'class': 'btn btn-primary', onclick: () => isLoggedIn(me) ? goto('/create') : goto('/login') },
      h(
        'svg',
        { height: '24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
        h('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' }),
        h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    )
  )
));
// CONCATENATED MODULE: ./src/components/login.js
 // eslint-disable-line no-unused-vars

/* harmony default export */ var login = (() => h(
  'div',
  { 'class': 'login' },
  h(
    'h2',
    null,
    'Click a Site to Login'
  ),
  h(
    'a',
    { href: '/auth/twitter' },
    h(
      'svg',
      { id: 'Logo_FIXED', 'data-name': 'Logo \u2014 FIXED', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 400 400' },
      h(
        'defs',
        null,
        h(
          'style',
          null,
          '.cls-1{fill:none;}.cls-2{fill:#1da1f2;}'
        )
      ),
      h(
        'title',
        null,
        'Twitter_Logo_Blue'
      ),
      h('rect', { 'class': 'cls-1', width: '400', height: '400' }),
      h('path', { 'class': 'cls-2', d: 'M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23' })
    )
  )
));
// CONCATENATED MODULE: ./src/components/view.js
 // eslint-disable-line no-unused-vars






/* harmony default export */ var view = (state => actions => {
  if (state.path === '/') {
    return h(
      'div',
      { 'class': 'container' },
      h(
        'h1',
        null,
        'UpSense'
      ),
      h(controls, { goto: actions.goto, me: state.me, sort: actions.sort }),
      h(post_list, { goto: actions.goto, posts: state.posts, vote: actions.vote })
    );
  } else if (state.path === '/create') {
    return h(
      'div',
      { 'class': 'container' },
      h(
        'h1',
        null,
        'UpSense'
      ),
      h(post_create, { goto: actions.goto, createPost: actions.createPost })
    );
  } else if (state.path === '/login') {
    return h(
      'div',
      { 'class': 'container' },
      h(
        'h1',
        null,
        'UpSense'
      ),
      h(login, null)
    );
  } else if (state.path.indexOf('/posts/') === 0) {
    const postId = state.path.substr(7);
    return h(
      'div',
      { 'class': 'container' },
      h(
        'h1',
        null,
        'UpSense'
      ),
      h(post_inspect, { post: state.posts[postId], goto: actions.goto, vote: actions.vote, addComment: actions.addComment, editPost: actions.editPost })
    );
  }
});
// CONCATENATED MODULE: ./src/components/index.js

/* harmony default export */ var components = (view);
// CONCATENATED MODULE: ./src/index.js







const src_state = {
  me: undefined,
  posts: store_room.getState(),
  sort: constants["TRENDING"],
  path: '/'
};

const src_hyper = app({ state: src_state, actions: actions_actions, view: components });
init(src_hyper);

store_store.subscribe(src_hyper.updateData);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const post = __webpack_require__(4)

module.exports = (state = {}, action) => {
  const id = action.postId
  if (!id) return state
  if (!action.$user.provider) return state

  return Object.assign({}, state, {
    [id]: post(state[id], action)
  })
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const votes = __webpack_require__(5)
const { CREATE, UPDATE, VOTE, COMMENT } = __webpack_require__(0)

module.exports = (state = {votes: {}}, action) => {
  switch (action.type) {
    case CREATE: {
      if (state.owner) return state
      return {
        postId: action.postId,
        title: action.title,
        description: action.description,
        owner: {
          userId: action.$userId,
          name: action.$user.name
        },
        createdAt: action.$timeMs,
        updatedAt: action.$timeMs,
        status: action.status,
        total: 0,
        comments: []
      }
    }

    case UPDATE: {
      if (action.$userId !== state.owner.userId && !action.$user.admin) return state
      return Object.assign({}, state, {
        title: action.title,
        description: action.description,
        updatedAt: action.$timeMs,
        status: action.status
      })
    }

    case VOTE: {
      const newVotes = votes(state.votes, action)
      const ammounts = Object.values(newVotes)
      return Object.assign({}, state, {
        votes: newVotes,
        total: ammounts.reduce((total, vote) => total + vote, 0)
      })
    }

    case COMMENT: {
      if (!action.text || action.text.length <= 4) return state
      const comments = state.comments.slice()
      comments.push({
        user: {
          userId: action.$userId,
          name: action.$user.name
        },
        text: action.text
      })
      return Object.assign({}, state, {comments})
    }

    default: {
      return state
    }
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const { VOTE } = __webpack_require__(0)

module.exports = (state = {}, action) => {
  switch (action.type) {
    case VOTE: {
      // this adds their vote
      if (!state[action.$userId]) {
        return Object.assign({}, state, {[action.$userId]: 1})
      // if they have already voted, this removes their vote
      } else {
        return Object.assign({}, state, {[action.$userId]: 0})
      }
    }
    default:
      return state
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
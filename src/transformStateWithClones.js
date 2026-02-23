'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = { ...state };
  const history = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      currentState = { ...currentState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      action.keysToRemove.forEach((key) => {
        delete currentState[key];
      });
    } else if (action.type === 'clear') {
      currentState = {};
    }
    history.push({ ...currentState });
  }

  return history;
}

module.exports = transformStateWithClones;

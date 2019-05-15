console.clear()

// ACTION CREATORS
// ---------------

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
    return { // Action = Form
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) => {
    return { // Action = Form
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    };
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return { // Action = Form
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    };
};


// REDUCERS
// --------

const claimsHistory = (listOfClaims = [], action) => {
    if(action.type === 'CREATE_CLAIM') {
        // We care about this action (Form)
        return [...listOfClaims, action.payload];
    }
    // We do not care about this action
    return listOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.amountOfMoneyToCollect;
    }
    else if(action.type === 'CREATE_POLICTY') {
        return bagOfMoney + action.amount;
    }

    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICTY') {
        return [...listOfPolicies, action.payload.name];
    }
    else if(action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
};

// Redux
// -----

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);

// Perform actions
// ---------------

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState)();
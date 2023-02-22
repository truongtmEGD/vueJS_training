import types from "./types";
export default {
    increment(state, payload) {
        let test = {...payload };
        console.log(test.name);
        console.log(test.age);
        switch (payload.type) {
            case types.INCREMENT:
                state.count = state.count + 1;
                break;
            case types.DECREMENT:
                state.count = state.count - 1;
                break;
            default:
                break;
        }
    }
};
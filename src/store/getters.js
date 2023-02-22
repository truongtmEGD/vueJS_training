export default {
    getStatus: state => {
        if (state.count % 2 == 0) {
            return "even"
        }
        return "old"
    }

};
import create from "zustand";
import produce from "immer";

const store = create(set => ({
    pendingScroll: '',
    updatePendingScroll: (scrollTo) => set(produce(state => {
        state.pendingScroll = scrollTo;
    })),
}))

export default store

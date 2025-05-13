interface IGetSearchListProps {
    page: string;
    lang: string;
    searchTerm?: string | null;
}
export declare const getSearchList: import("@reduxjs/toolkit").AsyncThunk<any, IGetSearchListProps, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export {};

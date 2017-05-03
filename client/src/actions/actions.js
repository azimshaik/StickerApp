export const AUTH_ACTIONS = Object.freeze({
    AUTH_CHANGED_ACTION: 'USER_AUTH_CHANGED_ACTION'
});

export const BROWSE_ACTIONS = Object.freeze({
    ADD_TAG_FILTER_ACTION: 'BROWSE_ADD_TAG_FILTER_ACTION',
    REMOVE_TAG_FILTER_ACTION: 'BROWSE_REMOVE_TAG_FILTER_ACTION',
    ITEMS_UPDATED_ACTION: 'BROWSE_ITEMS_UPDATED_ACTION',
    UPDATE_FAILED_ACTION: 'BROWSE_UPDATE_FAILED_ACTION',
    EXPAND_ITEM_ACTION: 'BROWSE_EXPAND_ITEM_ACTION',
    CLOSE_EXPANDED_ITEM_ACTION: 'BROWSE_CLOSE_EXPANDED_ITEM_ACTION'
});

export const CART_ACTIONS = Object.freeze({
    ITEMS_UPDATED_ACTION: 'CART_ITEMS_UPDATED_ACTION',
    UPDATE_FAILED_ACTION: 'CART_UPDATE_FAILED_ACTION'
});

export const CREATE_ACTIONS = Object.freeze({
    SEARCH_FAILED_ACTION: 'CREATE_SEARCH_FAILED_ACTION',
    SEARCH_SUCCEEDED_ACTION: 'CREATE_SEARCH_SUCCEEDED_ACTION',
    EXPAND_ITEM_ACTION: 'CREATE_EXPAND_ITEM_ACTION',
    CLOSE_EXPANDED_ITEM_ACTION: 'CREATE_CLOSE_EXPANDED_ITEM_ACTION'
});

export const TRENDING_ACTIONS = Object.freeze({
    ITEMS_UPDATED_ACTION: 'TRENDING_ITEMS_UPDATED_ACTION',
    EXPAND_ITEM_ACTION: 'TRENDING_EXPAND_ITEM_ACTION',
    CLOSE_EXPANDED_ITEM_ACTION: 'TRENDING_CLOSE_EXPANDED_ITEM_ACTION'
});

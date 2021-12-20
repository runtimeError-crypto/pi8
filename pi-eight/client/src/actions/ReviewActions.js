import dispatcher from '../dispatcher'

const reviewActions = {
    types: {
        CREATE_REVIEW: 'CREATE_REVIIEW',
        ALL_REVIEW: 'ALL_REVIEW',
        GET_ALL: 'GET_ALL'
    },

    create(review, id) {
        dispatcher.dispatch({
            type: this.types.ADD - REVIEW,
            reivew,
            id

        })
    },

    getAll(id) {
        page = page || dispatcher.dispatch({
            type: this.types.GET_ALL,
            id

        })
    },
}
export default reviewActions


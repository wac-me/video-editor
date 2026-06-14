export const state = {
    project: {
        captions: [],

        filters: {
            brightness: 100,
            contrast: 100,
            saturation: 100
        },

        trim: {
            start: 0,
            end: 0
        },

        crop: "Original",

        speed: 1
    },

    selectedItem: null,

    drag: null
};
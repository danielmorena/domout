var leftright = {
    left: function (data) {
        newData = { "left" : data }
        return newData;

    },

    right: function (data) {
        newData = { "right" : data }
        return newData;

    }

}

module.exports = leftright;
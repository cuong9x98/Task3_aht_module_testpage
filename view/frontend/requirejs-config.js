var config = {
    paths: {
        'bootstrap-js': "js/bootstrap.min.js",
        'jquery-js': "js/jquery.min.js"
    },
    shim: {
        'jquery-js': {
            deps: ['jquery']
        },
        'bootstrap-js': {
            deps: ['jquery']
        },
    },
};

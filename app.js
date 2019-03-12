const
    // My built in functions
    l = console.log,

    // Express Required libraries
    createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    // My Required libraries
    liveReload = require('livereload').createServer({
        exts: ['js', 'ejs']
    }),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    expressValidator = require('express-validator'),
    // MySQL database
    mysql = require('mysql'),
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "12345678",
        database: 'cars_directory'
    }),

    // Routers
    indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),

    // init express
    app = express();

// Database connections
con.connect(e => {
    console.log(e ? e.message : 'Connected to MySQL hosted:"localhost"');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use libraries
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));

app.use(cors());


// Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((q, s, n) => {
    n(createError(404));
});

// error handler
app.use((e, q, s, n) => {
    // set locals, only providing error in development
    s.locals.message = e.message;
    s.locals.error = q.app.get('env') === 'development' ? e : {};

    // render the error page
    s.status(e.status || 500);
    s.render('error');
});

liveReload.watch(__dirname, 'assets');
liveReload.watch(__dirname, 'views');
// liveReload.watch(__dirname, 'models');


module.exports = app;

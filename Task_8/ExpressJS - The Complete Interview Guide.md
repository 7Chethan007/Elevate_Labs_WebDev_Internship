<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# ExpressJS - The Complete Interview Guide

## **What is Express.js?**

Express.js is a **minimal, fast, and flexible Node.js web application framework** that provides a robust set of features for web and mobile applications. It simplifies the process of building servers and APIs by providing essential tools and functionalities like routing, middleware, and template engines.[^1][^2]

### **Key Features:**

- **Minimalist Framework**: Built with simplicity in mind[^3]
- **Powerful Routing System**: Handles different HTTP methods and URL patterns[^3]
- **Middleware Support**: Extensive middleware ecosystem for extending functionality[^3]
- **Template Engine Integration**: Support for Pug, EJS, Handlebars, etc.[^4]
- **RESTful API Development**: Ideal for building modern APIs[^5]


## **Core Concepts**

### **1. Routing**

Routes define how an application responds to client requests to specific endpoints (combination of URL path and HTTP method).[^6]

**Basic Route Structure:**

```javascript
app.METHOD(PATH, HANDLER)
```

**Route Examples:**

```javascript
const express = require('express');
const app = express();

// GET Route
app.get('/users', (req, res) => {
    res.send('List of users');
});

// POST Route  
app.post('/users', (req, res) => {
    res.send('Create a new user');
});

// Route Parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Query Parameters
app.get('/search', (req, res) => {
    const { q, limit } = req.query;
    res.send(`Search: ${q}, Limit: ${limit}`);
});

// Wildcard Routes
app.get('/products/*', (req, res) => {
    res.send('Product category page');
});
```

**Advanced Routing with app.route():**

```javascript
app.route('/books')
  .get((req, res) => {
    res.send('Get books');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update a book');
  });
```

**Catch-All Route (404 Handler):**

```javascript
// Must be placed at the end of all routes
app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
});
```


### **2. Middleware**

Middleware functions have access to the **request object (req)**, **response object (res)**, and **next middleware function (next)**. They can execute code, modify request/response objects, end the request-response cycle, or call the next middleware.[^7]

#### **Types of Middleware:**

**Application-Level Middleware:**

```javascript
// Global middleware - runs for all routes
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// Path-specific middleware
app.use('/api', (req, res, next) => {
    console.log('API endpoint accessed');
    next();
});
```

**Router-Level Middleware:**

```javascript
const router = express.Router();

router.use((req, res, next) => {
    console.log('Router middleware');
    next();
});

router.get('/profile', (req, res) => {
    res.send('User profile');
});

app.use('/user', router);
```

**Built-in Middleware:**

```javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
```

**Third-Party Middleware:**

```javascript
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors());           // Enable CORS
app.use(helmet());         // Security headers
app.use(morgan('dev'));    // HTTP request logger
```

**Custom Middleware Examples:**

```javascript
// Authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'Bearer valid-token') {
        req.user = { id: 1, name: 'John' };
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Logging middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

// Apply middleware to specific routes
app.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});
```


### **3. Error Handling**

Express provides comprehensive error handling through specialized middleware.[^8]

**Error-Handling Middleware:**

```javascript
// Error handler must have 4 parameters
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});
```

**Custom Error Class:**

```javascript
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

// Usage in routes
app.get('/error-demo', (req, res, next) => {
    try {
        throw new CustomError(400, 'Bad Request Error');
    } catch (error) {
        next(error); // Pass to error handler
    }
});
```

**Async Error Handling:**

```javascript
// Wrapper for async routes
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/users/:id', asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        throw new CustomError(404, 'User not found');
    }
    res.json(user);
}));
```


### **4. Express Router**

Router allows you to create modular, mountable route handlers.[^6]

**Router Module (routes/users.js):**

```javascript
const express = require('express');
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
    console.log('User routes middleware');
    next();
});

// Routes
router.get('/', (req, res) => {
    res.json({ message: 'Users list' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `User ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.json({ message: 'User created' });
});

module.exports = router;
```

**Using Router in Main App:**

```javascript
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
```


### **5. Template Engines**

Express supports multiple template engines for server-side rendering.[^4]

**Setting up Template Engine:**

```javascript
// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Render template
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Express App',
        message: 'Welcome!',
        users: ['John', 'Jane', 'Bob']
    });
});
```

**EJS Template (views/index.ejs):**

```html
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
    <ul>
        <% users.forEach(user => { %>
            <li><%= user %></li>
        <% }); %>
    </ul>
</body>
</html>
```

**Pug Template (views/index.pug):**

```pug
html
  head
    title= title
  body
    h1= message
    ul
      each user in users
        li= user
```


### **6. Sessions and Cookies**

**Cookie Management:**

```javascript
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Set cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'john', { 
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    });
    res.send('Cookie set');
});

// Get cookie
app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Username: ${username}`);
});

// Clear cookie
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie cleared');
});
```

**Session Management:**

```javascript
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Set session data
app.post('/login', (req, res) => {
    req.session.user = { id: 1, username: 'john' };
    res.json({ message: 'Logged in' });
});

// Get session data
app.get('/profile', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

// Destroy session
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Could not log out' });
        }
        res.json({ message: 'Logged out' });
    });
});
```


## **Security Best Practices**

### **1. Use Helmet for Security Headers**

```javascript
const helmet = require('helmet');
app.use(helmet());
```


### **2. Input Validation and Sanitization**

```javascript
const { body, validationResult } = require('express-validator');

app.post('/user',
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }).trim().escape(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Process valid data
    }
);
```


### **3. Rate Limiting**

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```


### **4. CORS Configuration**

```javascript
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
```


## **Authentication with JWT**

**JWT Authentication Setup:**

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Generate JWT
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

// Login route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user and verify password
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Generate token
        const token = generateToken(user);
        res.json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// JWT Verification Middleware
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[^1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});
```


## **Performance Optimization**

### **1. Enable Compression**

```javascript
const compression = require('compression');
app.use(compression());
```


### **2. Caching**

```javascript
const redis = require('redis');
const client = redis.createClient();

const cache = (duration) => {
    return (req, res, next) => {
        const key = req.originalUrl;
        client.get(key, (err, result) => {
            if (result) {
                res.send(JSON.parse(result));
            } else {
                res.sendResponse = res.send;
                res.send = (body) => {
                    client.setex(key, duration, JSON.stringify(body));
                    res.sendResponse(body);
                };
                next();
            }
        });
    };
};

// Use caching middleware
app.get('/api/data', cache(300), (req, res) => {
    // This response will be cached for 5 minutes
    res.json({ data: 'expensive operation result' });
});
```


### **3. Database Query Optimization**

```javascript
// Use pagination
app.get('/users', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const users = await User.find()
        .skip(skip)
        .limit(limit)
        .select('name email'); // Only select needed fields
        
    res.json(users);
});
```


### **4. Environment Variables**

```javascript
// Set NODE_ENV to production
process.env.NODE_ENV = 'production';

// Use environment-specific configurations
if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet());
}
```


## **Complete Express App Example**

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Performance middleware
app.use(compression());

// Static files
app.use(express.static('public'));

// Template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Express App' });
});

// API routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// 404 handler
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```


***

## **Interview Questions \& Answers**

### **1. What is Express.js and why is it used?**

**Answer:** Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web applications by providing a set of powerful tools and functionalities, such as routing, middleware, and template engines. Express.js is often used because it allows for rapid development of web applications and APIs.[^2][^1]

### **2. Explain the concept of middleware in Express.js.**

**Answer:** Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack. Middleware functions are used for tasks like logging, authentication, error handling, and more. They are invoked in the order they are added (using app.use()).[^2][^7]

### **3. How do you handle errors in Express.js?**

**Answer:** In Express.js, errors can be handled using middleware functions. An error-handling middleware function has four arguments instead of three: (err, req, res, next). When an error is passed to next(), Express will skip all remaining middleware and route handlers and go directly to the error-handling middleware. For example:[^8]

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```


### **4. What is the difference between app.get() and app.use() in Express.js?**

**Answer:** app.get() is a route definition for the HTTP GET method. It takes a path and a callback function that will be executed when a GET request is made to that path. On the other hand, app.use() is used to mount middleware functions or routers at a specific path. The function(s) will be executed whenever a request is made to the path, regardless of the HTTP method.[^2]

### **5. How can you serve static files in Express.js?**

**Answer:** Express.js provides a built-in middleware function called express.static to serve static files. For example, to serve images, CSS files, and JavaScript files from a directory named 'public', you would use:[^2]

```javascript
app.use(express.static('public'));
```


### **6. How do you retrieve parameters from a URL in Express.js?**

**Answer:** In Express.js, you can retrieve parameters from a URL using the req.params object. For example, in the route definition app.get('/users/:userId', callback), you can access the userId parameter in the callback function using req.params.userId.[^2]

### **7. What is the purpose of next() in Express.js?**

**Answer:** The next() function is used to pass control to the next middleware function in the stack. If not called, the request will be left hanging. It can also be used to pass errors to the next error-handling middleware function by providing an argument to next(), e.g., next(err).[^2]

### **8. How do you enable CORS in Express.js?**

**Answer:** To enable CORS (Cross-Origin Resource Sharing) in Express.js, you can use the cors middleware. First, you need to install it using npm, and then you can include and use it in your application:[^2]

```javascript
const cors = require('cors');
app.use(cors());
```


### **9. How can you set up a route that will match multiple HTTP verbs in Express.js?**

**Answer:** You can use the app.route() method to create a route path and then chain HTTP verb methods to it. For example:[^2]

```javascript
app.route('/book')
  .get((req, res) => {
    res.send('Get a book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update a book');
  });
```


### **10. How do you use middleware for specific routes?**

**Answer:** Middleware can be used for specific routes by providing the middleware function as an argument before the route's callback function. For example:[^2]

```javascript
const loggingMiddleware = (req, res, next) => {
    console.log('Logged:', req.url);
    next();
};

app.get('/users', loggingMiddleware, (req, res) => {
    res.send('Users list');
});
```

In the above example, the loggingMiddleware will only be executed for the /users route.

### **Additional Advanced Questions:**

### **11. Explain the difference between synchronous and asynchronous error handling in Express.**

**Answer:** Synchronous errors in Express are automatically caught and passed to error handlers. However, asynchronous errors must be explicitly passed to next(). For async/await functions, you need to wrap them in try-catch blocks or use an async error handler wrapper:[^9]

```javascript
// Async wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/async-route', asyncHandler(async (req, res) => {
    const data = await database.fetch(); // If this throws, it's caught
    res.json(data);
}));
```


### **12. How would you implement authentication using JWT in Express?**

**Answer:** JWT authentication involves creating tokens on login and verifying them on protected routes:[^10]

```javascript
const jwt = require('jsonwebtoken');

// Login route - generate token
app.post('/login', async (req, res) => {
    const user = await authenticateUser(req.body);
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '24h' });
    res.json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[^1];
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
```


### **13. What are the differences between sessions and cookies in Express?**

**Answer:** Sessions store data on the server with only a session ID sent to the client, while cookies store data directly on the client:[^11]

- **Sessions**: More secure, server-side storage, larger capacity (5-10MB), requires express-session middleware
- **Cookies**: Client-side storage, limited to 4KB, less secure, built into Express


### **14. How do you optimize Express.js performance in production?**

**Answer:** Key performance optimizations include:[^9]

- Set NODE_ENV to 'production'
- Use compression middleware
- Enable caching (Redis/Memcached)
- Use clustering to utilize multiple CPU cores
- Implement rate limiting
- Optimize database queries with indexing and pagination
- Use a reverse proxy (Nginx)


### **15. Explain the Express.js request-response lifecycle.**

**Answer:** The Express lifecycle follows this pattern:

1. **Request received** - Express receives HTTP request
2. **Middleware execution** - Runs in order of definition
3. **Route matching** - Finds matching route handler
4. **Route handler execution** - Executes callback function
5. **Response sent** - Sends response back to client
6. **Cleanup** - Express cleans up resources

The key is that middleware runs sequentially using next(), and the first matching route handler is executed unless next() is called to continue to the next handler.
<span style="display:none">[^12][^13][^14][^15][^16][^17][^18][^19][^20][^21][^22][^23][^24][^25][^26][^27][^28][^29][^30][^31][^32][^33][^34][^35][^36][^37][^38][^39][^40][^41][^42][^43][^44][^45][^46][^47][^48][^49][^50][^51][^52][^53][^54][^55][^56][^57][^58][^59]</span>

<div align="center">⁂</div>

[^1]: https://www.youtube.com/watch?v=fBzm9zja2Y8

[^2]: https://www.geeksforgeeks.org/node-js/middleware-in-express-js/

[^3]: https://www.geeksforgeeks.org/node-js/unique-features-of-express-js/

[^4]: https://expressjs.com/en/guide/using-template-engines.html

[^5]: https://www.ghazikhan.in/blog/expressjs-crash-course-build-restful-api-middleware

[^6]: https://expressjs.com/en/guide/routing.html

[^7]: https://expressjs.com/en/guide/using-middleware.html

[^8]: https://expressjs.com/en/guide/error-handling.html

[^9]: https://expressjs.com/en/advanced/best-practice-performance.html

[^10]: https://dev.to/michaelikoko/implementing-jwt-authentication-with-express-mongodb-and-passportjs-3fl7

[^11]: https://www.geeksforgeeks.org/node-js/difference-between-sessions-and-cookies-in-express/

[^12]: https://moldstud.com/articles/p-beyond-the-basics-advanced-features-and-functionality-in-expressjs

[^13]: https://expressjs.com/en/guide/writing-middleware.html

[^14]: https://www.youtube.com/watch?v=nH9E25nkk3I

[^15]: https://www.w3schools.com/nodejs/nodejs_middleware.asp

[^16]: https://github.com/expressjs/express/wiki/New-features-in-4.x

[^17]: https://expressjs.com

[^18]: https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples

[^19]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction

[^20]: https://radixweb.com/blog/expressjs-middleware

[^21]: https://betterstack.com/community/guides/scaling-nodejs/express-5-new-features/

[^22]: https://dev.to/dumebii/getting-started-with-express-javascript-5142

[^23]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes

[^24]: https://masteringbackend.com/posts/expressjs-5-tutorial-the-ultimate-guide

[^25]: https://stackoverflow.com/questions/49020934/is-there-a-type-in-types-express-for-express-middleware-functions

[^26]: https://dev.to/tristankalos/expressjs-security-best-practices-1ja0

[^27]: https://dev.to/rigalpatel001/top-5-tips-to-supercharge-your-expressjs-app-for-lightning-fast-performance-4f51

[^28]: https://dev.to/alahirajeffrey/how-to-implement-json-web-authentication-jwt-authentication-with-passport-in-express-39jg

[^29]: https://escape.tech/blog/how-to-secure-express-js-api/

[^30]: https://docs.nestjs.com/recipes/passport

[^31]: https://expressjs.com/en/advanced/best-practice-security.html

[^32]: https://raygun.com/blog/improve-node-performance/

[^33]: https://www.fullstackfoundations.com/blog/passport-jwt

[^34]: https://github.com/goldbergyoni/nodebestpractices

[^35]: https://dzone.com/articles/nodejs-performance-tuning-advanced-techniques

[^36]: https://www.passportjs.org/packages/passport-jwt/

[^37]: https://expressjs.com/2024/09/29/security-releases.html

[^38]: https://sematext.com/blog/expressjs-best-practices/

[^39]: https://heynode.com/tutorial/authenticate-users-node-expressjs-and-passportjs/

[^40]: https://blog.appsignal.com/2024/07/03/security-best-practices-for-your-nodejs-application.html

[^41]: https://loadforge.com/guides/optimizing-middleware-for-improved-expressjs-performance

[^42]: https://www.youtube.com/watch?v=Tau0ZMJ4aR0

[^43]: https://distantjob.com/blog/nodejs-security-best-practices/

[^44]: https://dev.to/qbentil/how-to-write-custom-error-handler-middleware-in-expressjs-using-javascript-29j1

[^45]: https://www.geeksforgeeks.org/node-js/how-to-manage-sessions-and-cookies-in-express-js/

[^46]: https://clouddevs.com/express/templating-engines/

[^47]: https://www.geeksforgeeks.org/node-js/how-to-create-custom-error-handler-middleware-in-express/

[^48]: https://permify.co/post/cookie-management-in-expressjs-to-authenticate-users/

[^49]: https://dzone.com/articles/templating-in-nodejs-using-express-pug-view-engine

[^50]: https://betterstack.com/community/guides/scaling-nodejs/error-handling-express/

[^51]: https://www.cbtnuggets.com/blog/technology/devops/ejs-vs-pug-vs-handlebars

[^52]: https://expressjs.com/en/resources/middleware/cookie-session.html

[^53]: https://dev.to/alexmercedcoder/express-templating-cheatsheet-pug-ejs-handlebars-mustache-liquid-50f1

[^54]: https://www.reddit.com/r/node/comments/18ukkyc/whats_the_best_way_to_handle_errors_in_expressjs/

[^55]: https://expressjs.com/en/resources/middleware/session.html

[^56]: https://www.geeksforgeeks.org/node-js/ejs-template-engine-for-express/

[^57]: https://stackoverflow.com/questions/71722828/how-to-handle-express-session-cookies-on-the-client-side

[^58]: https://www.pabbly.com/tutorials/template-engine-in-expressjs/

[^59]: https://www.youtube.com/watch?v=EUYnERcOGpA


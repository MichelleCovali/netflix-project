import app from './app';

const port: number = parseInt(process.env.PORT!) || 3000;
console.log(`Using port: ${port}`);

const server = app.listen(port, () => console.log(`server is running on port ${port}`));

// Handle uncaught errors, unhandled rejections, and SIGTERM/SIGINT
// Handle uncaught exceptions in the application.
// This block logs the error details (name, message, stack trace) to aid in debugging, and then gracefully shuts down the application to avoid an unstable state.
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error Shutting Down...');
    console.error(err.name, err.message, err.stack);
        process.exit(1);
});

// Handle unhandled promise rejections in the application.
// Logging the rejection reason and gracefully shutting down the server ensures the application doesn't continue in an unstable state.
// After the server shuts down, the process is terminated to signal an error.
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    server.close(() => {
        process.exit(1);
    });
});

// Handle the SIGTERM signal, which is typically sent by the operating system to safely terminate the process.
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});

process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});


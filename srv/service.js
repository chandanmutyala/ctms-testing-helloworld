module.exports = srv => {
  srv.on('hello', req => 'Hello World');
}

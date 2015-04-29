var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var parser = tar.Parse(); 
parser.on(); 

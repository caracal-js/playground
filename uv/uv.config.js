self.__uv$config = {
    prefix: '/playground/_/',
    bare: 'https://bare.sys32.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/playground/uv/uv.handler.js',
    bundle: '/playground/uv/uv.bundle.js',
    config: '/playground/uv/uv.config.js',
    sw: '/playground/uv/uv.sw.js',
};

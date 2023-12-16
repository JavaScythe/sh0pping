Bun.serve({
    port: 3000,
    development: true,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response(Bun.file("index.html"));
	if (url.pathname == "/mat") return new Response(Bun.file("mat.html"));
        if (url.pathname == "/theslop.js") return new Response(Bun.file("theslop.js"));
        if (url.pathname == "/math3.png") return new Response(Bun.file("math3.png"));
        if(url.pathname.startsWith("/components")){
            return new Response(Bun.file(url.pathname.slice(1)));
        }
	if(url.pathname.startsWith("/comp")){
		return new Response(Bun.file(url.pathname.slice(1)));
	}
        return new Response("L bozo");
    }
});

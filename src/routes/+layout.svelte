<script lang="ts">
	import '$lib/themes/light.css';
</script>

<svelte:head>
	<script>
		(function (d) {
			let config = {
					kitId: 'ksd7pln',
					scriptTimeout: 3000,
					async: true
				},
				h = d.documentElement,
				t = setTimeout(function () {
					h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
				}, config.scriptTimeout),
				tk = d.createElement('script'),
				f = false,
				s = d.getElementsByTagName('script')[0],
				a;
			h.className += ' wf-loading';
			tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
			tk.async = true;
			tk.onload = tk.onreadystatechange = function () {
				a = this.readyState;
				if (f || (a && a != 'complete' && a != 'loaded')) return;
				f = true;
				clearTimeout(t);
				try {
					Typekit.load(config);
				} catch (e) {}
			};
			s.parentNode.insertBefore(tk, s);
		})(document);
	</script>
</svelte:head>

<nav
	class="sticky top-0 z-20 h-16 bg-bg-container flex items-center px-12 shadow-sm border-b border-border-secondary"
>
	<a href="/" class="font-bold alibaba-puhuiti text-xl text-text">AntSvelte</a>
</nav>

<slot />

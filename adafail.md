Console Error

A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error

...
<HotReload globalError={[...]} webSocket={WebSocket} staticIndicatorState={{pathname:null, ...}}>
<AppDevOverlayErrorBoundary globalError={[...]}>
<ReplaySsrOnlyErrors>
<DevRootHTTPAccessFallbackBoundary>
<HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
<HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} ...>
<RedirectBoundary>
<RedirectErrorBoundary router={{...}}>
<Head>
<**next_root_layout_boundary**>
<SegmentViewNode type="layout" pagePath="/booking-c...">
<SegmentTrieNode>
<link>
<script>
<script>
<RootLayout>
<html lang="id" className="scroll-smooth">
<body
className="geist_a71539c9-module**T19VSG**variable geist_mono_8d43a2aa-module**8Li5zG**var..."

-                           __processed_43c93226-775f-4a32-b321-0be58a888467__="true"
-                           bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWll..."
                          >
                            <header className="fixed top-...">
                              <nav className="container ...">
                                <LinkComponent>
                                  <LinkComponent href="/" className="flex items...">
                                    <a className="flex items..." ref={function} onClick={function onClick} ...>
                                      <div
                                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 tex..."
-                                       bis_skin_checked="1"
                                      >
                                      ...
                                <div
                                  className="hidden items-center gap-8 md:flex"
-                                 bis_skin_checked="1"
                                >
                                <div
                                  className="flex items-center gap-4"
-                                 bis_skin_checked="1"
                                >
                            ...
                              <SegmentViewNode type="page" pagePath="/booking-c...">
                                <SegmentTrieNode>
                                <Home>
                                  <div
                                    className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
-                                   bis_skin_checked="1"
                                  >
                                    <section className="relative o...">
                                      <div
                                        className="container mx-auto px-6"
-                                       bis_skin_checked="1"
                                      >
                                        <div
                                          className="flex flex-col items-center text-center"
-                                         bis_skin_checked="1"
                                        >
                                          <div
                                            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py..."
-                                           bis_skin_checked="1"
                                          >
                                          <h1>
                                          <p>
                                          <div
                                            className="mt-10 flex flex-col gap-4 sm:flex-row"
-                                           bis_skin_checked="1"
                                          >
                                      <div
                                        className="absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 ..."
-                                       bis_skin_checked="1"
                                      >
                                    <section id="features" className="py-24 bg-z...">
                                      <div
                                        className="container mx-auto px-6"
-                                       bis_skin_checked="1"
                                      >
                                        <div
                                          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
-                                         bis_skin_checked="1"
                                        >
                                          <FeatureCard>
                                            <div
                                              className="group rounded-2xl border border-zinc-200 bg-white p-8 transit..."
-                                             bis_skin_checked="1"
                                            >
                                              <div
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-x..."
-                                               bis_skin_checked="1"
                                              >
                                              ...
                                          <FeatureCard>
                                            <div
                                              className="group rounded-2xl border border-zinc-200 bg-white p-8 transit..."
-                                             bis_skin_checked="1"
                                            >
                                              <div
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-x..."
-                                               bis_skin_checked="1"
                                              >
                                              ...
                                          <FeatureCard>
                                            <div
                                              className="group rounded-2xl border border-zinc-200 bg-white p-8 transit..."
-                                             bis_skin_checked="1"
                                            >
                                              <div
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-x..."
-                                               bis_skin_checked="1"
                                              >
                                              ...
                                          <FeatureCard>
                                            <div
                                              className="group rounded-2xl border border-zinc-200 bg-white p-8 transit..."
-                                             bis_skin_checked="1"
                                            >
                                              <div
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-x..."
-                                               bis_skin_checked="1"
                                              >
                                              ...
                                          <FeatureCard>
                                            <div
                                              className="group rounded-2xl border border-zinc-200 bg-white p-8 transit..."
-                                             bis_skin_checked="1"
                                            >
                                              <div
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-x..."
-                                               bis_skin_checked="1"
                                              >
                                              ...
                                          <FeatureCard>
                                            <div
                                              className="group rounded-2xl border border-zinc-200 bg-white p-8 transit..."
-                                             bis_skin_checked="1"
                                            >
                                              <div
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-x..."
-                                               bis_skin_checked="1"
                                              >
                                                <div
                                                  className="flex -space-x-1 font-bold text-zinc-400"
-                                                 bis_skin_checked="1"
                                                >

*                                                 ?
                                              ...
                                    <footer className="border-t b...">
                                      <div
                                        className="container mx-auto px-6 text-center text-zinc-500"

-                                       bis_skin_checked="1"
                                        >
                                ...
                    ...

  src\app\layout.tsx (35:15) @ RootLayout

  33 | <nav className="container mx-auto flex h-16 items-center justify-between px-6">
  34 | <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">

  > 35 | <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/20">

       |               ^

  36 | <CalendarCheck className="h-5 w-5" />
  37 | </div>
  38 | Booking<span className="text-blue-600">Chekin</span>
  Call Stack
  18

Show 16 ignore-listed frame(s)
div
<anonymous>
RootLayout
src\app\layout.tsx (35:15)

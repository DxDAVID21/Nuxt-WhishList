<template>
  <section class="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-white">

    <div class="text-center mb-12">
      <h1 class="text-5xl font-extrabold tracking-tight mb-4">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Sobre el Projecte
        </span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
        Coneix com s’ha creat aquesta aplicació i quines tecnologies la fan possible.
      </p>
    </div>

    <div
      class="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 border border-gray-200 dark:border-gray-700
             backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
    >

      <h2 class="text-3xl font-semibold mb-4">🎯 Objectiu de l’App</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Aquesta aplicació és una eina moderna per explorar animes, pensada per oferir una interfície neta,
        ràpida i intuïtiva. Pots cercar animes, veure detalls complets, consultar recomanacions i
        guardar favorits.
      </p>

      <h2 class="text-3xl font-semibold mb-4">🛠️ Tecnologies Utilitzades</h2>
      <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 text-gray-700 dark:text-gray-300">
        <li class="flex items-center gap-2"><span class="text-indigo-400 text-xl">⚡</span> Vue 3</li>
        <li class="flex items-center gap-2"><span class="text-green-500 text-xl">🧩</span> Pinia</li>
        <li class="flex items-center gap-2"><span class="text-purple-400 text-xl">🎨</span> TailwindCSS</li>
        <li class="flex items-center gap-2"><span class="text-yellow-400 text-xl">🔗</span> Vue Router</li>
        <li class="flex items-center gap-2"><span class="text-pink-500 text-xl">📡</span> Jikan API</li>
        <li class="flex items-center gap-2"><span class="text-red-400 text-xl">📱</span> Disseny Responsive</li>
      </ul>

      <h2 class="text-3xl font-semibold mb-4">🚀 Visió</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
        L’objectiu és facilitar la cerca i descoberta d’animes d’una manera visualment atractiva i ràpida.
        Futures millores inclouran perfils d’usuari, recomanacions basades en preferències i filtres avançats.
      </p>

      <div class="text-center mt-12">
        <h3 class="text-2xl font-semibold mb-4">🌐 Xarxes Socials</h3>
        <div class="flex justify-center gap-6 text-xl">
          <a href="www.linkedin.com/in/david-marcelo-quispe-huamani-542443354" target="_blank" class="hover:text-indigo-400 transition"><i class="fab fa-linkedin"></i> LinkedIn</a>
          <a href="" class="hover:text-pink-500 transition"><i class="fa fa-person-rifle"></i> Portfoli</a>
          <a href="https://github.com/DXDAVID21" target="_blank" class="hover:text-blue-500 transition"><i class="fab fa-github"></i> Github</a>
        </div>
      </div>

      <div class="mt-14 text-center">
        <NuxtLink
          to="/"
          class="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 
                 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg"
        >
          Tornar a l'Inici
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

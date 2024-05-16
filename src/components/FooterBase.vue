<template>
  <footer class="w-full pb-4 text-center">
    <nav class="mt-6 inline-flex gap-2 text-center text-xl">
      <button
        icon-btn
        aria-label="toggle theme"
        @click="toggleDark()"
      >
        <div
          i-carbon-sun
          dark:i-carbon-moon
        />
      </button>

      <a
        i-carbon-logo-github
        icon-btn
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
    </nav>
  </footer>
</template>

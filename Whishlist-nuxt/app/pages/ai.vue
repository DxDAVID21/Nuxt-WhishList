<script setup>
import { ref, nextTick, watch } from "vue";
import { useGemini } from "@/composables/useGemini.js"; 

const { history, isGenerating, error, sendMessage } = useGemini();
const currentMessage = ref("");

async function handleSend() {

  const messageToSend = currentMessage.value;
  currentMessage.value = ''; 
  await sendMessage(messageToSend);
}

watch(history, () => {
  nextTick(() => {
    const endOfChat = document.getElementById('end-of-chat');
    if (endOfChat) {
      endOfChat.scrollIntoView({ behavior: 'smooth' });
    }
  });
}, { deep: true });
</script>

<template>
  <div class="bg-neutral-900 p-6 rounded-2xl max-w-xl mx-auto shadow-2xl text-white h-[80vh] flex flex-col">
    <h2 class="text-2xl font-bold mb-4 border-b border-neutral-800 pb-3 text-center">🤖 Asistencia IA</h2>

    <div class="flex-grow overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            
      <div v-if="history.length === 0" class="text-center text-neutral-500 pt-10">
        <p>¡Hola! Preguntam sobre qualsevol tema de anime per començar la conversació.</p>
        <p class="text-sm mt-2">Usant Gemini 2.5 Flash.</p>
      </div>
            
      <div 
        v-for="(msg, index) in history" 
        :key="index" 
        :class="[
          'flex', 
          msg.role === 'user' ? 'justify-end' : 'justify-start'
        ]"
      >
        <div :class="[
          'max-w-[85%]',
          'p-3 rounded-xl shadow-lg',
          'whitespace-pre-wrap', 
          msg.role === 'user' 
            ? 'bg-indigo-600 rounded-br-none' 
            : 'bg-neutral-800 rounded-tl-none'
        ]">
                    
          <div v-if="msg.role === 'ai' && !msg.loading" class="font-bold text-indigo-400 mb-1 text-sm">
            Gemini Flash
          </div>
                    
          <div v-if="!msg.loading">
            {{ msg.content }}
          </div>
                    
          <div v-else class="flex items-center space-x-2 text-neutral-400">
            <span class="dot-flashing"></span>
            <span>   Pensant...</span>
          </div>
        </div>
      </div>
            
      <p v-if="error" class="text-red-500 mt-4 text-center p-2 bg-red-900/50 rounded">
        Error: {{ error }}
      </p>
            
      <div id="end-of-chat"></div>
    </div>

    <div class="mt-4 flex items-center gap-2 border-t border-neutral-800 pt-4">
      <input 
        v-model="currentMessage" 
        @keyup.enter="handleSend"
        placeholder="Pregunta el que vulgis..."
        :disabled="isGenerating"
        class="flex-grow p-3 rounded-lg bg-neutral-800 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60 transition-all"
      />

      <button 
        @click="handleSend"
        :disabled="isGenerating || !currentMessage.trim()"
        class="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg disabled:opacity-30 transition-all"
      >
        <i class="fas fa-paper-plane text-white text-xl"></i>
      </button>
    </div>
  </div>
</template>
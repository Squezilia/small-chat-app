<script setup lang="ts">
import { Send } from 'lucide-vue-next';
import { InputGroupButton } from '~/components/ui/input-group';
import { nextTick } from 'vue';
import type { User } from 'better-auth';
import { authClient } from '~/lib/auth';

interface ChatMessage {
  user: User;
  message: string;
  timestamp: number;
}

interface DisplayMessage {
  target: User;
  continuous: boolean;
  message: string;
  dateString: string;
  timestamp: number;
}

const chatMessages = ref<ChatMessage[]>([]);
const currentMessage = ref<string>('');
const chatWindow = ref<HTMLDivElement | null>(null);
const chatWindowContent = ref<HTMLDivElement | null>(null);
const session = authClient.useSession();

const displayMessages = ref<DisplayMessage[]>([]);

let lastUser: User | null = null;
watch(
  () => chatMessages.value.length,
  (newLen, oldLen) => {
    if (newLen > oldLen) {
      const added = chatMessages.value.slice(oldLen);

      for (const message of added) {
        displayMessages.value.push({
          continuous: lastUser ? lastUser.id === message.user.id : false,
          target: message.user,
          message: message.message,
          dateString: '',
          timestamp: message.timestamp,
        });

        lastUser = message.user;
      }
    }
  }
);

async function send() {
  if (
    !currentMessage.value.trim() ||
    !chatWindow.value ||
    !chatWindowContent.value ||
    !session.value.data ||
    !session.value.data.user
  )
    return;
  chatMessages.value.push({
    message: currentMessage.value,
    user: session.value.data.user,
    timestamp: Date.now(),
  });
  currentMessage.value = '';
  await nextTick();
  chatWindow.value.scrollTo({
    behavior: 'instant',
    top: chatWindowContent.value.getBoundingClientRect().height,
  });
}
</script>

<template>
  <Page class="h-screen flex flex-col-reverse p-0 py-6">
    <div>
      <InputGroup class="h-11 rounded-lg max-w-xl mx-auto">
        <InputGroupInput
          v-model="currentMessage"
          placeholder="Bugün hava güzel..."
          @keypress.enter="send"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="ghost"
            size="icon-sm"
            class="rounded-full"
            @click="send"
            ><Send />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
    <div ref="chatWindow" class="max-h-full overflow-auto">
      <div ref="chatWindowContent" class="pt-12 pb-4">
        <ChatMessage
          v-for="message of displayMessages"
          :key="message.timestamp"
          :user="message.target"
          :continuous="message.continuous"
        >
          {{ message.message }}
        </ChatMessage>
      </div>
    </div>
  </Page>
</template>

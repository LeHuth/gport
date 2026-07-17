<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'reka-ui'
import { ref } from 'vue'

const currentMenu = ref('')
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')
function handleClick() {
  // eslint-disable-next-line no-alert
  alert('hello!')
}
</script>

<template>
  <MenubarRoot
      v-model="currentMenu"
      class="MenubarRoot"
  >
    <MenubarMenu value="file">
      <MenubarTrigger
          class="MenubarTrigger"
      >
        File
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
            class="MenubarContent"
            align="start"
            :side-offset="5"
            :align-offset="-3"
        >
          <MenubarItem
              class="MenubarItem"
          >
            New Tab
            <div class="RightSlot">
              ⌘ T
            </div>
          </MenubarItem>
          <MenubarItem
              class="MenubarItem"
          >
            New Window
            <div class="RightSlot">
              ⌘ N
            </div>
          </MenubarItem>
          <MenubarItem
              class="MenubarItem"
              disabled
          >
            New Incognito Window
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarSub>
            <MenubarSubTrigger
                class="MenubarItem"
            >
              Share
              <div
                  class="RightSlot"
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </MenubarSubTrigger>
            <MenubarPortal>
              <MenubarSubContent
                  class="MenubarContent"
                  :align-offset="-5"
              >
                <MenubarItem
                    class="MenubarItem"
                >
                  Email Link
                </MenubarItem>
                <MenubarItem
                    class="MenubarItem"
                >
                  Messages
                </MenubarItem>
                <MenubarItem
                    class="MenubarItem"
                >
                  Notes
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
          >
            Print…
            <div class="RightSlot">
              ⌘ P
            </div>
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger
          class="MenubarTrigger"
      >
        Edit
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
            class="MenubarContent"
            align="start"
            :side-offset="5"
            :align-offset="-3"
        >
          <MenubarItem
              class="MenubarItem"
          >
            Undo
            <div class="RightSlot">
              ⌘ Z
            </div>
          </MenubarItem>
          <MenubarItem
              class="MenubarItem"
          >
            Redo
            <div class="RightSlot">
              ⇧ ⌘ Z
            </div>
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarSub>
            <MenubarSubTrigger
                class="MenubarItem"
            >
              Find
              <div
                  class="RightSlot"
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </MenubarSubTrigger>

            <MenubarPortal>
              <MenubarSubContent
                  class="MenubarContent"
                  :align-offset="-5"
              >
                <MenubarItem
                    class="group MenubarItem"
                >
                  Search the web…
                </MenubarItem>
                <MenubarSeparator class="MenubarSeparator" />
                <MenubarItem
                    class="MenubarItem"
                >
                  Find…
                </MenubarItem>
                <MenubarItem
                    class="MenubarItem"
                >
                  Find Next
                </MenubarItem>
                <MenubarItem
                    class="MenubarItem"
                >
                  Find Previous
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
          >
            Cut
          </MenubarItem>
          <MenubarItem
              class="MenubarItem"
          >
            Copy
          </MenubarItem>
          <MenubarItem
              class="MenubarItem"
          >
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger
          class="MenubarTrigger"
      >
        View
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
            class="MenubarContent"
            align="start"
            :side-offset="5"
            :align-offset="-14"
        >
          <MenubarCheckboxItem
              v-model="checkboxOne"
              class="MenubarCheckboxItem"
          >
            <MenubarItemIndicator class="MenubarItemIndicator">
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Show Bookmarks
            <div
                class="RightSlot"
            >
              ⌘+B
            </div>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
              v-model="checkboxTwo"
              class="MenubarCheckboxItem"
          >
            <MenubarItemIndicator class="MenubarItemIndicator">
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
          >
            Reload
            <div class="RightSlot">
              ⌘ R
            </div>
          </MenubarItem>
          <MenubarItem
              class="MenubarItem"
              disabled
          >
            Force Reload
            <div class="RightSlot">
              ⇧ ⌘ R
            </div>
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
          >
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
          >
            Hide Sidebar
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger
          class="MenubarTrigger"
      >
        Profiles
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
            class="MenubarContent"
            align="start"
            :side-offset="5"
            :align-offset="-14"
        >
          <MenubarRadioGroup v-model="person">
            <MenubarRadioItem
                class="MenubarCheckboxItem"
                value="pedro"
            >
              <MenubarItemIndicator class="MenubarItemIndicator">
                <Icon icon="radix-icons:dot-filled" />
              </MenubarItemIndicator>
              Pedro Duarte
            </MenubarRadioItem>
            <MenubarRadioItem
                class="MenubarCheckboxItem"
                value="colm"
            >
              <MenubarItemIndicator class="MenubarItemIndicator">
                <Icon icon="radix-icons:dot-filled" />
              </MenubarItemIndicator>
              Colm Tuite
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
              @click="handleClick"
          >
            Edit…
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem
              class="MenubarItem"
          >
            Add Profile…
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>

<style>
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/grass.css';

/* reset */
button {
  all: unset;
}

.MenubarRoot {
  display: flex;
  background-color: white;
  padding: 3px;
  border-radius: 6px;
  box-shadow: 0 2px 10px var(--black-a7);
}

.MenubarTrigger {
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  color: var(--grass-11);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
}

.MenubarTrigger[data-highlighted],
.MenubarTrigger[data-state='open'] {
  background-color: var(--grass-4);
}

.MenubarContent,
.MenubarSubContent {
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.MenubarItem,
.MenubarSubTrigger,
.MenubarCheckboxItem,
.MenubarRadioItem {
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: var(--grass-11);
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 10px;
  position: relative;
  user-select: none;
}

.MenubarItem.inset,
.MenubarSubTrigger.inset,
.MenubarCheckboxItem.inset,
.MenubarRadioItem.inset {
  padding-left: 20px;
}

.MenubarItem[data-state='open'],
.MenubarSubTrigger[data-state='open'] {
  background-color: var(--grass-4);
  color: var(--grass-11);
}

.MenubarItem[data-highlighted],
.MenubarSubTrigger[data-highlighted],
.MenubarCheckboxItem[data-highlighted],
.MenubarRadioItem[data-highlighted] {
  background-image: linear-gradient(135deg, var(--grass-9) 0%, var(--grass-10) 100%);
  color: var(--grass-1);
}

.MenubarItem[data-disabled],
.MenubarSubTrigger[data-disabled],
.MenubarCheckboxItem[data-disabled],
.MenubarRadioItem[data-disabled] {
  color: var(--mauve-8);
  pointer-events: none;
}

.MenubarItemIndicator {
  position: absolute;
  left: 0;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.MenubarSeparator {
  height: 1px;
  background-color: var(--grass-6);
  margin: 5px;
}

.RightSlot {
  margin-left: auto;
  padding-left: 20px;
  color: var(--mauve-9);
}

[data-highlighted] > .RightSlot {
  color: white;
}

[data-disabled] > .RightSlot {
  color: var(--mauve-8);
}
</style>
<script>
  import { createPopper } from "@popperjs/core";
  import { clickOutside } from "./clickOutside";
  let dropdownPopoverShow = false;
  let btnDropdownRef;
  let popoverDropdownRef;
  const toggleDropdown = (ev) => {
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };

  function closeDropdown() {
    dropdownPopoverShow = false;
  }
</script>

<div use:clickOutside on:click_outside={closeDropdown}>
  <a
    class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    href="/"
    bind:this={btnDropdownRef}
    on:click|preventDefault={toggleDropdown}
  >
    Menu
  </a>
  <div
    bind:this={popoverDropdownRef}
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
      ? 'block'
      : 'hidden'}"
  >
    <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
    >
      Admin Layout
    </span>
    <a
      href="/admin/dashboard"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Dashboard
    </a>
    <a
      href="/admin/settings"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Settings
    </a>
    <a
      href="/admin/tables"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Tables
    </a>
    <a
      href="/admin/maps"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Maps
    </a>
    <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
    <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
    >
      Auth Layout
    </span>
    <a
      href="/user/register"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Register
    </a>
    <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
    <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
    >
      No Layout
    </span>
    <a
      href="/landing"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Landing
    </a>
    <a
      href="/profile"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Profile
    </a>
  </div>
</div>

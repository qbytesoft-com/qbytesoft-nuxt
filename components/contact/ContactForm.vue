<template>
  <div class="contact-area">
    <div class="container mx-auto py-[80px] md:py-[100px]">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-6/12 pr-[30px]">
          <div class="contact-img">
            <img src="~/assets/img/contact.svg" alt="contact">
          </div>
        </div>
        <div class="w-full md:w-6/12">
          <div class="bg-white rounded-md shadow border border-solid border-gray-200 p-6">
            <h3 class="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

            <form action="">
              <div class="grid lg:grid-cols-12 lg:gap-6">
                <div class="lg:col-span-6 mb-5">
                  <div class="text-left">
                    <label for="name" class="font-semibold">Your Name:</label>
                    <div class="form-icon relative mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-user w-4 h-4 absolute top-3 left-4">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input name="name" id="name" type="text" class="form-input pl-11"
                             placeholder="Name :" autocomplete="off">
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-6 mb-5">
                  <div class="text-left">
                    <label for="email" class="font-semibold">Your Email:</label>
                    <div class="form-icon relative mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-mail w-4 h-4 absolute top-3 left-4">
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                        </path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input name="email" id="email" type="email" class="form-input pl-11"
                             placeholder="Email :">
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div class="mb-5">
                  <div class="text-left">
                    <label for="subject" class="font-semibold">Your Question:</label>
                    <div class="form-icon relative mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-book w-4 h-4 absolute top-3 left-4">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path
                          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                        </path>
                      </svg>
                      <input name="subject" id="subject" class="form-input pl-11"
                             placeholder="Subject :">
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <div class="text-left">
                    <label for="comments" class="font-semibold">Your Comment:</label>
                    <div class="form-icon relative mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-message-circle w-4 h-4 absolute top-3 left-4">
                        <path
                          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                        </path>
                      </svg>
                      <textarea name="comments" id="comments"
                                class="form-input form-textarea pl-11 h-28"
                                placeholder="Message :"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit"
                      class="inline-flex py-[10px] px-[30px] bg-[#37ba93] hover:bg-[#37ba93] border-[#37ba93] hover:border-[#37ba93] text-white rounded-md mt-5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm"
}
</script>

<style scoped>

</style>

<template>
  <!-- Profile Card -->
  <div>
    <ProfileCard class="mt-16 mb-5" :editProfileMode="true" />

    <v-card
      class="mx-auto tw-opacity-95 my-5"
      rounded="lg"
      elevation="20"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-3 tw-h-full">
        <div
          class="d-flex align-center justify-space-between px-4 py-2 tw-h-full"
        >
          <h1 class="tw-text-xl tw-font-semibold text--primary">CV</h1>
          <div class="edit__profile__btn d-flex align-center justify-end">
            <v-btn
              class="tw-text-lg text-capitalize tw-font-bold"
              depressed
              text
              :color="uploadCvDialog ? 'error' : 'primary'"
              @click="uploadCvDialog = !uploadCvDialog"
            >
              {{
                uploadCvDialog
                  ? "Cancel"
                  : userData &&
                    userData.videos &&
                    userData.videos[0] &&
                    userData.videos[0].vid_url
                  ? "Edit Video"
                  : "Upload Video"
              }}
              <v-icon class="ml-1" small>{{
                uploadCvDialog ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row no-gutters>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <section id="video__cv__container" class="tw-h-full">
                <video
                  v-if="
                    userData &&
                    userData.videos &&
                    userData.videos[0] &&
                    userData.videos[0].vid_url
                  "
                  id="profile__video__cv"
                  class="tw-border-2 tw-rounded-lg tw-border-slate-600"
                  controls
                  width="640"
                  height="300"
                >
                  <source
                    :src="
                      uploadCvDialog
                        ? ''
                        : userData &&
                          userData.videos &&
                          userData.videos[0] &&
                          userData.videos[0].vid_url
                    "
                    type="video/mp4"
                  />
                </video>
                <div class="d-flex align-center tw-h-full" v-else>
                  <h4 class="mx-auto red--text ma-1">No Video CV uploaded.</h4>
                </div>
              </section>
            </v-col>

            <v-col
              align="center"
              align-self="center"
              cols="12"
              md="6"
              lg="6"
              xl="6"
            >
              <v-card
                :disabled="
                  !(
                    userData &&
                    userData.profile &&
                    userData.profile.uploaded_cv_file_url
                  )
                "
                width="200"
                class="mx-auto rounded-0 pa-1"
              >
                <v-btn
                  color="primary"
                  dark
                  width="190"
                  class="text-capitalize"
                  depressed
                  tile
                  @click="
                    downloadFile(
                      userData &&
                        userData.profile &&
                        userData.profile.uploaded_cv_file_url
                    ),
                      `${
                        personalDetails ? personalDetails.first_name : 'doc'
                      }_CV`
                  "
                >
                  Download CV <v-icon class="ml-2">mdi-cloud-download</v-icon>
                </v-btn>
              </v-card>
              <h4
                v-if="
                  !(
                    userData &&
                    userData.profile &&
                    userData.profile.uploaded_cv_file_url
                  )
                "
                class="mx-auto red--text ma-1"
              >
                No CV uploaded.
              </h4>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>

    <v-card
      class="mx-auto tw-opacity-95 my-5"
      rounded="lg"
      elevation="20"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-3 tw-h-full">
        <div
          class="d-flex align-center justify-space-between px-4 py-2 tw-h-full"
        >
          <h1 class="tw-text-xl tw-font-semibold text--primary">
            Personal Details
          </h1>
          <div class="edit__profile__btn d-flex align-center justify-end">
            <v-btn
              class="tw-text-lg text-capitalize tw-font-bold"
              depressed
              text
              :color="personalEdits ? 'error' : 'primary'"
              @click="personalEdits = !personalEdits"
            >
              {{ personalEdits ? "Cancel" : "Edits" }}
              <v-icon class="ml-1" small>{{
                personalEdits ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div
          v-if="personalDetailsLoader"
          class="d-flex my-5 align-center justify-center"
        >
          <v-progress-circular
            indeterminate
            :size="70"
            color="secondary"
          ></v-progress-circular>
        </div>

        <div v-else-if="personalEdits" class="personal__details__form pa-5">
          <v-form ref="form" v-if="personalDetails">
            <div class="d-flex align-start">
              <v-text-field
                label="First Name"
                class="mr-2"
                v-model="personalDetails.first_name"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="personalDetails.last_name"
                label="Last Name"
                class="ml-2"
                outlined
              ></v-text-field>
            </div>

            <div class="d-flex align-start">
              <v-text-field
                v-model="personalDetails.email"
                placeholder="Email"
                outlined
                type="email"
              ></v-text-field>

              <v-row class="ml-5" no-gutters dense>
                <v-col cols="3">
                  <v-autocomplete
                    style="width: 220px"
                    v-model="countryCode"
                    :items="country_code_list"
                    item-value="country_id"
                    item-text="country_code"
                    placeholder="Country Code"
                    hide-details
                    single-line
                    class="phoneSelector"
                    outlined
                  >
                    <template v-slot:append>
                      <!-- Caret Down -->
                      <v-icon>mdi-chevron-down</v-icon>
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="9">
                  <v-text-field
                    class="ml-2"
                    outlined
                    v-model.trim="personalDetails.num"
                    hide-details
                    placeholder="Phone number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <v-select
              v-model="personalDetails.country"
              label="Country"
              :items="countries"
              :item-text="'country_name' || 'co_name'"
              :item-value="'country_id' || 'id'"
              outlined
            >
            </v-select>

            <div class="d-flex align-center">
              <v-select
                v-model="personalDetails.state"
                :items="stateList"
                label="State / Province"
                class="mr-2"
                outlined
                item-text="state_name"
                item-value="id"
              >
              </v-select>
              <v-select
                class="ml-2"
                v-model="personalDetails.city"
                :items="citiesList"
                label="City"
                :item-text="'city_name'"
                :item-value="'city_id'"
                outlined
              >
              </v-select>
            </div>

            <div class="d-flex align-center">
              <v-select
                v-model="personalDetails.nationality"
                :items="nationalities"
                label="Nationality"
                item-text="nat_name"
                class="mr-2"
                outlined
              >
              </v-select>

              <v-select
                v-model="personalDetails.gender"
                :items="genders"
                item-text="name"
                item-value="id"
                label="Gender"
                outlined
                class="ml-2"
              >
              </v-select>

              <v-select
                v-model="personalDetails.marital_status"
                label="Maritial Status"
                item-text="m_name"
                item-value="id"
                :items="maritalStatus"
                outlined
                class="ml-2"
              >
              </v-select>
            </div>

            <v-select
              hide-details
              v-model="personalDetails.languages"
              :items="languages"
              label="Language (max 3 language)"
              outlined
              item-text="l_name"
              item-value="id"
              multiple
              clearable
              chips
            >
            </v-select>
          </v-form>

          <div v-else class="d-flex my-5 align-center justify-center">
            <v-progress-circular
              indeterminate
              :size="70"
              color="secondary"
            ></v-progress-circular>
          </div>

          <v-btn
            height="50"
            depressed
            width="200"
            class="text-capitalize my-3"
            :loading="profileLoader"
            color="secondary"
            @click="saveProfile"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row v-if="userData && userData.profile" no-gutters>
            <v-col cols="12" md="4" lg="4" xl="4">
              <div class="pt-0">
                <h4>Full Name</h4>
                <h6>{{ userData.profile.name }}</h6>
              </div>

              <div>
                <h4>Gender</h4>
                <h6>{{ userData.profile.gender }}</h6>
              </div>

              <div>
                <h4>Marital Status</h4>
                <h6>{{ userData.profile.marital_status }}</h6>
              </div>

              <div>
                <h4>Nationality</h4>
                <h6>{{ userData.profile.nationality }}</h6>
              </div>
            </v-col>

            <v-col cols="12" md="4" lg="4" xl="4">
              <div class="pt-0">
                <h4>Country</h4>
                <h6>{{ userData.profile.country }}</h6>
              </div>

              <div>
                <h4>City</h4>
                <h6>{{ userData.profile.city }}</h6>
              </div>

              <div>
                <h4>State / Province</h4>
                <h6>{{ userData.profile.state }}</h6>
              </div>

              <div>
                <h4>Language</h4>
                <h6>{{ userData.profile.languages }}</h6>
              </div>
            </v-col>

            <v-col cols="12" md="4" lg="4" xl="4">
              <div class="pt-0">
                <h4>Phone number</h4>
                <h6>{{ (userData.profile && userData.profile.num) || "-" }}</h6>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
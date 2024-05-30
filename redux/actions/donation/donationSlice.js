'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDonationApi, addOrganizationApi, claimDonationApi, getDonationByIdApi, orgLoginApi, orgRegistrationApi } from "./donationApi";
import OrganizationRegister from "../../../components/OrganizationRegister";
const initialState = {
  donationData:null,
  value:0,
  OrgDetails : null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getDonationByIdAsync = createAsyncThunk(
  "donation/getDonationById",
  async (id) => {
    const response = await getDonationByIdApi(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const addDonationAsync = createAsyncThunk(
  "donation/addDonation",
  async (data) => {
    const response = await addDonationApi(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const orgRegistrationAsync = createAsyncThunk(
  "donation/OrgRegister",
  async (data) => {
    const response = await orgRegistrationApi(data);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
export const orgLoginAsync = createAsyncThunk(
  "donation/orgLogin",
  async (data) => {
    const response = await orgLoginApi(data);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const donationClaimAsync = createAsyncThunk(
  "donation/claim",
  async (data) => {
    const response = await claimDonationApi(data);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

// export const getPropertiesAsync = createAsyncThunk(
//   "property/getProperties",
//   async (id) => {
//     const response = await getPropertyApi(id);
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );
// export const getPropertiesByIdAsync = createAsyncThunk(
//   "property/getPropertiesById",
//   async (id) => {
//     const response = await getPropertyByIdApi(id);
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );

// export const getAllPropertiesAsync = createAsyncThunk(
//   "property/getAllProperties",
//   async () => {
//     const response = await getAllPropertiesApi();
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );
// export const updateLikesAsync = createAsyncThunk(
//   "property/updateLikes",
//   async (data) => {
//     const response = await udpateLikesApi(data);
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );
// export const updatePropertyAsync = createAsyncThunk(
//   "property/updateProperty",
//   async (data) => {
//     const response = await updatePropertyApi(data);
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );
//   export const deletePropertyAsync = createAsyncThunk(
//     "property/deleteProperty",
//     async (id) => {
//       const response = await deletePropertyApi(id);
//       // The value we return becomes the `fulfilled` action payload
//       return response;
//     }
// );
// export const sendEmailAsync = createAsyncThunk(
//   "property/sendEmail",
//   async (data) => {
//     const response = await sendEmailApi(data);
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );

export const propertySlice = createSlice({
  name: "donation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    incrementLikes: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.propertyDetails.likes += 1;
    },
    decrementLikes: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.propertyDetails.likes -= 1;
    },
    orgLogout : (state) =>{
      state.OrgDetails = null
    },
    filter: (state,action) => {
      state.AllProperties = action.payload
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder

      .addCase(getDonationByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDonationByIdAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.donationData = action.payload
      })

      .addCase(orgRegistrationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(orgRegistrationAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.OrgDetails = action.payload
      })
      .addCase(orgLoginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(orgLoginAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.OrgDetails = action.payload
      })

  

  },
});

export const { increment, orgLogout, filter, deleteProperty, decrement, incrementByAmount,incrementLikes , decrementLikes} = propertySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default propertySlice.reducer;

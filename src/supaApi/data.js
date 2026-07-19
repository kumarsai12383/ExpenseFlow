import { supabase } from "../supaClient";

async function AddExpense(
  userId,
  title,
  amount,
  category,
  note,
  setIsSubmitted,
) {
  const { data, error } = await supabase.from("expenses").insert([
    {
      title: title,
      amount: amount,
      category: category,
      user_id: userId,
      note: note,
    },
  ]);
  if (error) {
    console.error("Error adding expense:", error);
    return null;
  } else {
   
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  }
}

async function AddIncome(userId, title, amount, setIsSubmitted,setIsEditing, setSelectedIncome) {
  const { data, error } = await supabase
    .from("Income")
    .insert([{ title: title, amount: amount, user_id: userId }]);
  if (error) {
    console.error("Error adding income:", error);
    return null;
  } else {
    setIsEditing(false);
    setSelectedIncome(null);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  }
}

async function GetExpenses(userId) {
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", userId);
  if (error) {
    console.error("Error fetching expenses:", error);
    return null;
  } else {
   
    return data;
  }
}
async function GetIncome(userId) {
  const { data, error } = await supabase
    .from("Income")
    .select("*")
    .eq("user_id", userId);
  if (error) {
    console.error("Error fetching income:", error);
    return null;
  } else {
  
    return data;
  }
}

async function DeleteExpense(expenseId) {
  const { data, error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId);
  if (error) {
    console.error("Error deleting expense:", error);
    return null;
  }
  
  return data;
}

async function DeleteIncome(incomeId) {
  const { data, error } = await supabase
    .from("Income")
    .delete()
    .eq("id", incomeId);
  if (error) {
    console.log(error);
    return null;
  }
 
  return data;
}
async function UpdateIncome(incomeId, title, amount,isSubmitted, setIsEditing, setSelectedIncome) {
  const {data,error} = await supabase.from("Income").update({title: title, amount: amount}).eq("id", incomeId);
  if(error){
    console.log(error)
    return null;
  }
 
  isSubmitted(true);
  setIsEditing(false);
  setSelectedIncome(null);
  setTimeout(() => {
    isSubmitted(false);
  }, 2000);
  return data;
}

async function UpdateExpense(expenseId, title, amount, category, note,isSubmitted) {
  const { data, error } = await supabase
    .from("expenses")
    .update({ title, amount, category, note })
    .eq("id", expenseId);
  if (error) {
    console.error("Error updating expense:", error);
    return null;
  }
 
  isSubmitted(true);
  setTimeout(() => {
    isSubmitted(false);
  }, 2000);
  return data;
 
}
async function AddProfile(
  userId,
  fullName,
  phone,
  city,
  gender,
  Dob,
  occupation,
  isSubmitted,
) {
  const { data, error } = await supabase.from("userDataTable").insert([
    {
      user_id: userId,
      Full_Name: fullName,
      Phone: phone,
      City: city,
      Gender: gender,
      Dob: Dob,
      Occupation: occupation,
    },
  ]);
  if (error) {
    console.error("Error adding profile:", error);
    return null;
  } else {
  
    isSubmitted(true);
    setTimeout(() => {
      isSubmitted(false);
    }, 2000);
    return data;
  }
}
async function GetProfile(userId) {
  const { data, error } = await supabase
    .from("userDataTable")
    .select("*")
    .eq("user_id", userId);
  if (error) {
    console.error("Error fetching profile:", error);
    return null;
  } else {
 
    return data;
  }
}
async function UpdateProfile(
  userId,
  fullName,
  phone,
  city,
  gender,
  Dob,
  occupation,
  isSubmitted,
) {
  const { data, error } = await supabase
    .from("userDataTable")
    .update({
      Full_Name: fullName,
      Phone: phone,
      City: city,
      Gender: gender,
      Dob: Dob,
      Occupation: occupation,
    })
    .eq("user_id", userId);
  if (error) {
    console.error("Error updating profile:", error);
    return null;
  }
 
  isSubmitted(true);
  setTimeout(() => {
    isSubmitted(false);
  }, 2000);
  return data;
}
export {
  AddExpense,
  AddIncome,
  GetExpenses,
  GetIncome,
  DeleteExpense,
  DeleteIncome,
  UpdateExpense,
  UpdateIncome,
  AddProfile,
  GetProfile,
  UpdateProfile,
};

import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        defaultValue=""
        render={({ field }) => <TextField {...field} label={label} />}
        fullWidth
        required
        control={control}
      />
    </Grid>
  );
};

export default FormInput;

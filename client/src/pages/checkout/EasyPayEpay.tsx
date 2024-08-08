import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextareaAutosize
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const EasyPayEpay = () => {
  const { control, handleSubmit, watch } = useForm();
  const paymentMethod = watch('paymentMethod');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="payment-method">
      <FormControl component="fieldset">
        <Controller
          name="paymentMethod"
          control={control}
          defaultValue="epay"
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel
                value="epay"
                control={<Radio />}
                label="ePay Bg, EasyPay и B-Pay"
              />
            </RadioGroup>
          )}
        />
      </FormControl>

      {paymentMethod === 'epay' && (
        <Box className="payment-method-content">
          <Typography variant="body1">
            Ще бъдете пренасочени към сайта на ePay.bg след като завършите поръчката си.
          </Typography>

          <Box className="payment-method-billing-address"></Box>
          <Box className="checkout-agreements-block">
            <Box data-role="checkout-agreements">
              <Box
                className="checkout-agreements fieldset"
                style={{ display: 'none' }}
              ></Box>
            </Box>

            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="comment-content"
                id="comment-header"
              >
                <Typography variant="h6">
                  Имате ли коментар към поръчката?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <form onSubmit={handleSubmit(onSubmit)} className="order-comment-form">
                  <Box className="payment-option-inner">
                    <FormControl fullWidth margin="normal">
                      <Controller
                        name="comment"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextareaAutosize
                            {...field}
                            minRows={4}
                            placeholder="Въведете вашият коментар"
                            style={{ width: '100%' }}
                          />
                        )}
                      />
                    </FormControl>
                  </Box>
                  <Box textAlign="right" mt={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      title="Направи поръчка"
                      disabled
                    >
                      Направи поръчка
                    </Button>
                  </Box>
                </form>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      )}
    </Box>
  );
};


// export const EasyPayEpay = () => {
// 	return (
// 		<div className='payment-method'>
// 			<div className='payment-method-title field choice fc-dirty'>
// 				<input
// 					type='radio'
// 					name='payment[method]'
// 					className='radio'
// 					id='epay'
// 					value='epay'
// 				/>
// 				<label className='label' htmlFor='epay'>
// 					<span>ePay Bg, EasyPay и B-Pay</span>
// 				</label>
// 			</div>
// 			<div className='payment-method-content'>
// 				<span>
// 					Ще бъдете пренасочени към сайта на ePay.bg след като завършите поръчката си.
// 				</span>

// 				<div data-role='checkout-messages' className='messages'></div>

// 				<div className='payment-method-billing-address'></div>
// 				<div className='checkout-agreements-block'>
// 					<div data-role='checkout-agreements'>
// 						<div
// 							className='checkout-agreements fieldset'
// 							style={{ display: 'none' }}
// 						></div>
// 					</div>

// 					<div
// 						className='payment-option _collapsible opc-payment-additional comment last _active'
// 						data-collapsible='true'
// 						role='tablist'
// 					>
// 						<div
// 							className='payment-option-title field choice'
// 							data-role='title'
// 							role='tab'
// 							aria-selected={true}
// 							aria-expanded='true'
// 							tabIndex={0}
// 						>
// 							<span className='action action-toggle' role='heading' aria-level={2}>
// 								<span>Имате ли коментар към поръчката?</span>
// 							</span>
// 						</div>
// 						<div
// 							className='payment-option-content'
// 							data-role='content'
// 							role='tabpanel'
// 							aria-hidden='false'
// 						>
// 							<form className='form form-discount order-comment-form'>
// 								<div className='payment-option-inner'>
// 									<div className='field'>
// 										<div className='control'>
// 											<textarea
// 												className='input-text order-comment order-comment-input'
// 												name='comment-code'
// 												rows={4}
// 												aria-placeholder='Въведете вашият коментар'
// 											></textarea>
// 											<p></p>
// 										</div>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='actions-toolbar'>
// 					<div className='primary'>
// 						<button
// 							className='action primary checkout'
// 							type='submit'
// 							disabled={true}
// 							title='Направи поръчка'
// 						>
// 							<span>Направи поръчка</span>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Input,
  Button,
  Grid,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Collapse,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Code as CodeIcon,
} from '@material-ui/icons';
import { without } from 'lodash';
import moment from 'moment';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import saga from './saga';
import { makeDataIsFetchedSelector, makeMailsSelector } from './selectors';
import { sliceKey, reducer, actions } from './slice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    isClickable: {
      cursor: 'pointer',
    },
  }),
);

const Mails = () => {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  const classes = useStyles();
  const [mailsOpened, setMailsOpened] = useState<string[]>([]);
  const [rawSourcesOpened, setRawSourcesOpened] = useState<string[]>([]);
  const dispatch = useDispatch();

  const dataIsFetched = useSelector(makeDataIsFetchedSelector);
  const mails = useSelector(makeMailsSelector);

  useEffect(() => {
    if (!dataIsFetched) {
      dispatch(actions.fetchData());
    }
  }, [dataIsFetched, dispatch]);

  return (
    <>
      <Helmet>
        <title>Mails</title>
        <meta name="description" content="Devilbox Web-UI" />
      </Helmet>
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          Mails
        </Typography>

        <Typography variant="h2" component="h2" gutterBottom>
          Send test email
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Input
                placeholder="recipient"
                name="recipient"
                value=""
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Input placeholder="subject" name="subject" value="" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <Input placeholder="message" name="message" value="" fullWidth />
            </Grid>
            <Grid item xs={2}>
              <Button>Send email</Button>
            </Grid>
          </Grid>
        </form>

        <Box mt={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            Received emails
          </Typography>
        </Box>

        {mails.length > 0 && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="button">#</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="button">Date</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="button">From</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="button">To</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="button">Subject</Typography>
                  </TableCell>
                  <TableCell style={{ width: 56 }} />
                </TableRow>
              </TableHead>
              <TableBody>
                {mails.map((mail, index) => (
                  <Fragment key={mail.id}>
                    <TableRow
                      className={classes.isClickable}
                      onClick={() => {
                        setMailsOpened(
                          mailsOpened.includes(mail.id)
                            ? without(mailsOpened, mail.id)
                            : [...mailsOpened, mail.id],
                        );
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{moment(mail.date).format('llll')}</TableCell>
                      <TableCell>{mail.from}</TableCell>
                      <TableCell>{mail.to}</TableCell>
                      <TableCell>{mail.subject}</TableCell>
                      <TableCell>
                        {mailsOpened.includes(mail.id) ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6} style={{ padding: 0 }}>
                        <Collapse
                          in={mailsOpened.includes(mail.id)}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell
                                  style={{
                                    paddingBottom: 0,
                                    paddingTop: 0,
                                    width: '100%',
                                  }}
                                >
                                  <Box pt={2} pb={2}>
                                    <Typography variant="body1">
                                      {mail.body}
                                    </Typography>
                                  </Box>
                                </TableCell>

                                <TableCell
                                  style={{
                                    paddingBottom: 0,
                                    paddingTop: 0,
                                    paddingRight: 4,
                                  }}
                                >
                                  <Tooltip title="Raw source">
                                    <IconButton
                                      onClick={() => {
                                        setRawSourcesOpened(
                                          rawSourcesOpened.includes(mail.id)
                                            ? without(rawSourcesOpened, mail.id)
                                            : [...rawSourcesOpened, mail.id],
                                        );
                                      }}
                                    >
                                      <CodeIcon />
                                    </IconButton>
                                  </Tooltip>
                                </TableCell>
                              </TableRow>
                              {rawSourcesOpened.includes(mail.id) && (
                                <TableRow>
                                  <TableCell
                                    colSpan={2}
                                    style={{ paddingTop: 0 }}
                                  >
                                    <Box mt={2}>
                                      <TextField
                                        multiline
                                        value={mail.raw}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        fullWidth
                                        variant="filled"
                                      />
                                    </Box>
                                  </TableCell>
                                </TableRow>
                              )}
                            </TableBody>
                          </Table>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Mails;

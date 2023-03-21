import React, { useState, useEffect } from "react";
import { visuallyHidden } from "@mui/utils";
import { Button, InputAdornment, TextField, Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Quizzies } from "../quizzes/Quizzes";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "course",
    numeric: false,
    disablePadding: true,
    hideOnMobile: false,
    label: "Course",
  },
  {
    id: "quiz",
    numeric: true,
    disablePadding: false,
    hideOnMobile: false,
    label: "Quiz",
  },
  {
    id: "questions",
    numeric: true,
    disablePadding: false,
    hideOnMobile: true,
    label: "# Questions",
  },
  {
    id: "view",
    numeric: true,
    disablePadding: false,
    hideOnMobile: false,
    label: "View",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          isSmallScreen && headCell.hideOnMobile ?
          <></>
          :
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function QuizTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("course");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rawQuizzes, setRawQuizzes] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [searchString, setSearchString] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    setRawQuizzes(Quizzies);
    setQuizzes(Quizzies);
    setSearchString("");
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    const includedQuizzes = [];
    const searchValue = event.target.value;
    setSearchString(searchValue);
    for(const Quiz of rawQuizzes){
      (Quiz.course.toLowerCase().includes(searchValue.toLowerCase()) || Quiz.quiz.toLowerCase().includes(searchValue.toLowerCase()) ) ? includedQuizzes.push(Quiz) : null
    }
    setQuizzes(includedQuizzes);
  }

  // Avoid a layout jump when reaching the last page with empty quizzes.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - quizzes.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper className="p-4">
        <div className={isSmallScreen ? "text-center my-3" : "flex flex-row justify-between my-3"}>
          <Typography variant="h6" id="tableTitle" component="div">
            Quizzes
          </Typography>
          <div>
            <TextField
              variant="standard"
              value={searchString}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <TableContainer>
          <Table
            sx={isSmallScreen ? {} : { minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={quizzes.length}
            />
            <TableBody>
              {quizzes
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.course + row.quiz}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        className="font-medium"
                      >
                        {row.course}
                      </TableCell>
                      <TableCell 
                        align="right"
                        >
                        {row.quiz}
                      </TableCell>
                      {isSmallScreen ? 
                        <></>
                        :
                        <TableCell 
                          align="right" 
                          >
                          {row.questions.length}
                        </TableCell>
                      }
                      <TableCell align="right">
                        <Button variant="outlined" href={"/".concat(row.id)}>View</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {quizzes.length > rowsPerPage ?
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={quizzes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          :
          <></>
        }
      </Paper>
    </Box>
  );
}

// import { number } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/UserSlice";
import "../Pagination/Pagination.css"

// console.log(total_pages);

const Pagination = () => {
	const dispatch = useDispatch();
	const total_pages = useSelector((state) => state.newUser.totalPage);
    // console.log(total_pages);
	const paginate = (pgnum) =>{
		dispatch(userActions.setPageNumber(pgnum));
        }
	const pageNumbers = [];

	for(let i = 1; i <=total_pages; i++) {
		pageNumbers.push(i);
        // console.log("hi");
	}
    // const currentPage = useSelector((state)=> state.newUser.currentPage);
    // console.log(currentPage);
	return (
		<div>
			<div className="pagination">
				{pageNumbers.map((number) => (
					<div key={number} onClick={() => paginate(number)} className="page-item">
						<div  className="page-link" >
							{number}
						</div>
					</div>                    
                    
				))}
			</div>
		
		</div>
	);
};

export default Pagination;

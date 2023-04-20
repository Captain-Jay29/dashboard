import React from 'react';

// Images
import search from './search.png'
import bell from './bell.png'
import down from './down.png'
import jacob from './jacob.png'
import calculator from './calculator.png'
import alex from './alex.png'
import mujo from './mujo.png'
import stack from './stack.png'




// Material UI
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { Container, InputAdornment, TextField } from "@mui/material";

// Charts
import { Radar, RadarChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';


const data1 = [
  {
    "name": "Invitations sent",
    "value": 60,
    'fill': '#C2ECC1'
  },
  {
    "name": "Pending invitations",
    "value": 60,
    'fill': '#1F1F1F'
  },
  {
    "name": "Profile views",
    "value": 60,
     'fill': '#C5C7F6'
  }
];

const data2 = [
  {
    "subject": "Jan",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Feb",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "March",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "April",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "May",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "June",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
]




const Stat = () => {

	return (


		// 2 6 4 ----> breakup
		<Grid container direction='column' spacing={5}> 

			{/*Row 1*/}
			<Grid item xs={2} sx={{marginLeft: 5, marginTop: 5, }}>

				{/*row*/}
				<Grid container spacing={2}>
					
					{/*Column 1 - search bar*/}
					<Grid item xs={6}>
						<TextField
					        id="search"
					        type="search"
					        label="Search"
					        sx={{fontSize:'15px', width: 260,  color:'#94979A', backgroundColor:'#F8F8F8' }}
					        InputProps={{
					          style: {fontSize:'15px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'},
					          endAdornment: (
					            <InputAdornment position="end">
					              <img src={search} />
					            </InputAdornment>
					          ),
					        }}
					        InputLabelProps={{
					        	style: {fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}
					        }}
					      />
					</Grid>

					{/*Column 2 - Jacob*/}
					<Grid item xs={6}>
						

						<Grid container spacing={2}>
							
								<Grid item xs={2} sx={{margin:0}}>

								<div sx={{width:'45px', height:'45px'}}>
									<img src={bell} />
								</div>

									

								</Grid>
								
								<Grid item xs={6} sx={{margin:0, padding:0}}>

									<List>
										<ListItem disablePadding>
							            <ListItemButton sx={{padding:0}}>

							              <ListItemIcon sx={{padding:0, width: 40, height: 40, }}>
							                <img src={jacob} />
							              </ListItemIcon>

							              <ListItemText>
							              	<Typography sx={{fontSize:'20px', padding:0, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'black'}}>
								              	Jacob Frost
								            </Typography>
							              </ListItemText>
							            
							            </ListItemButton>
							          </ListItem>
									</List>

								</Grid>
								
								<Grid container xs={1} sx={{paddingTop: 4}}>

									
										<img src={down} width={20} height={20} />
								

								</Grid>
							
						</Grid>


					</Grid>
					
					
				</Grid>


			</Grid>





			{/*Row 2*/}
			<Grid item xs={6} sx={{marginTop:3}}>
				
				<Grid container direction='column' spacing={0}>

					{/*Campaign analytics*/}
					<Grid item xs={2}>

					

						<Grid container spacing={20}>
							<Grid item xs={6} sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal'}}>

								<h1 style={{fontSize:'28px', paddingLeft: '60px'}}>Campaign Analytics</h1>

							</Grid>
							


							<Grid item xs={6}>

								<Card sx={{backgroundColor:'#ECECEC80', width: '187px', height: '32px', paddingLeft: 0}}>

									<Grid container spacing={0} alignItems="center" justifyContent="center">
										<Grid item xs={2} sx={{paddingTop: 1, paddingLeft: 1}}>

											
												<img src={calculator} width={18} height={18}/>
											

										</Grid>
										<Grid item xs={8} sx={{padding:0}} textAlign="center">

											<Typography sx={{fontSize:'14px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal', color:'black'}}>
											Mar 10 - Apr 10
												{/*<p style={{fontSize:'14px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal', color:'black'}}>
													Mar 10 - Apr 10
												</p>*/}
											</Typography>

											
										</Grid>
										<Grid item xs={2} sx={{paddingTop:1}}>

											<div sx={{width:'18px', height:'18px', paddingTop: 2}}>
												<img src={down} />
											</div>

										</Grid>
									</Grid>

							  	</Card>

							</Grid>

						</Grid>


					</Grid>
					

					{/*Stat number sections*/}
					<Grid item xs={2} sx={{margin:0}}>

						<Grid container spacing={3} sx={{padding:0, paddingLeft: '60px'}}>


							<Grid item xs={4}>
								<p style={{marginBottom: 5, color:'#94979A', fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}}>
									Invitations sent
								</p>
								
								<List sx={{padding:0}}>
						         	
						         	
					         		<ListItem disablePadding sx={{padding:0}}>
							            <ListItemButton sx={{padding:0}}>


								              <ListItemText>
								              	<Typography sx={{fontSize:'28px',padding:0, fontFamily: 'Rubik', fontWeight:400, fontStyle:'normal', color:'black', lineHeight: '25px'}}>
									              	286
									            </Typography>
								              </ListItemText>
						            
						            </ListItemButton>
						          </ListItem>

						    	</List>	
							</Grid>
							
							<Grid item xs={4}>
								<p style={{marginBottom: 5, color:'#94979A', fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}}>
									Pending invitations
								</p>
								
								<List sx={{padding:0}}>
						         	
						         	
					         		<ListItem disablePadding sx={{padding:0}}>
							            <ListItemButton sx={{padding:0}}>


								              <ListItemText>
								              	<Typography sx={{fontSize:'28px',padding:0, fontFamily: 'Rubik', fontWeight:400, fontStyle:'normal', color:'black', lineHeight: '25px'}}>
									              	12
									            </Typography>
								              </ListItemText>
						            
						            </ListItemButton>
						          </ListItem>

						    	</List>
							</Grid>

							<Grid item xs={4}>
								<p style={{marginBottom: 5, color:'#94979A', fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}}>
									Profile views
								</p>
								
								<List sx={{padding:0}}>
						         	
						         	
					         		<ListItem disablePadding sx={{padding:0}}>
							            <ListItemButton sx={{padding:0}}>


								              <ListItemText>
								              	<Typography sx={{fontSize:'28px',padding:0, fontFamily: 'Rubik', fontWeight:400, fontStyle:'normal', color:'black', lineHeight: '25px'}}>
									              	2891
									            </Typography>
								              </ListItemText>
						            
						            </ListItemButton>
						          </ListItem>

						    	</List>
							</Grid>


						</Grid>

					</Grid>
					

					{/*Graphs*/}
					<Grid item xs={8}>
						

						<Grid container spacing={0}>
							
							{/*Pie Chart*/}
							<Grid item xs={6}>
								
								<Container sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal'}}>

									<PieChart width={300} height={300}>
									  <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill='fill' />
									  <Legend />
									  <Tooltip />
									</PieChart>
								
								</Container>


							</Grid>
							

							{/*Other Chart*/}
							<Grid item xs={6}>
								
								<Container maxWidth="sm" sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal'}}>

									<RadarChart outerRadius={90} width={300} height={300} data={data2}>
									  <PolarGrid />
									  <PolarAngleAxis dataKey="subject" />
									  <PolarRadiusAxis angle={30} domain={[0, 150]} />
									  <Radar name="Campaign 1" dataKey="A" stroke="#8884d8" fill="#C2ECC1" fillOpacity={0.6} />
									  <Radar name="Campaign 2" dataKey="B" stroke="#82ca9d" fill="#C5C7F6" fillOpacity={0.6} />
									  <Legend />
									  <Tooltip />
									  {/*<CartesianGrid  />*/}
									</RadarChart>
								
								</Container>
							</Grid>

						</Grid>


					</Grid>
				
				</Grid>

			</Grid>





			
			{/*Row 3*/}
			<Grid item xs={0}>

				<Grid container direction='column' spacing={0} sx={{paddingLeft:'60px'}}>
					

					<Grid item xs={3}>
						<Grid container spacing={1}>

							<Grid item xs={6} sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal'}}>
								<h1 style={{fontSize:'28px', paddingLeft: '60px'}}>Recent Activity</h1>
							</Grid>

							<Grid item xs={6}>

								<Card sx={{backgroundColor:'#ECECEC80', width: '112px', height: '32px', paddingLeft: 0}}>

									<Grid container spacing={0} alignItems="center" justifyContent="center">
										
										<Grid item xs={9} sx={{padding:0}} textAlign="center">

											<Typography sx={{fontSize:'16px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal', color:'black'}}>
												Last 24h
											</Typography>

											
										</Grid>
										<Grid item xs={3} sx={{paddingTop:1}}>

											<div sx={{width:'18px', height:'18px', paddingTop: 2}}>
												<img src={down} />
											</div>

										</Grid>
									</Grid>

							  	</Card>

							</Grid>


						</Grid>
					</Grid>
					
					<Grid item xs={3}>


						<List sx={{padding:0, margin:0}}>
							<ListItem disablePadding>
				            <ListItemButton sx={{padding:0,  margin:0, paddingBottom: 2}}>

				              <ListItemIcon sx={{padding:0, width: 40, height: 40, }}>
				                <img src={alex} />
				              </ListItemIcon>

				              <ListItemText>
				              	<Typography sx={{fontSize:'20px', padding:0, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'black'}}>
					              	Alex Morgan sent you a message.
					            </Typography>
				              </ListItemText>
				            
				            </ListItemButton>
				          </ListItem>
						</List>

						
					</Grid>

					<Divider />
					
					<Grid item xs={3}>
						<List>
							<ListItem disablePadding>
				            <ListItemButton sx={{padding:0, paddingBottom: 2}}>

				              <ListItemIcon sx={{padding:0, width: 40, height: 40, }}>
				                <img src={mujo} />
				              </ListItemIcon>

				              <ListItemText>
				              	<Typography sx={{fontSize:'20px', padding:0, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'black'}}>
					              	Mujo Prosper sent you a connection request.
					            </Typography>
				              </ListItemText>
				            
				            </ListItemButton>
				          </ListItem>
						</List>
					</Grid>

					<Divider />
					
					<Grid item xs={3}>
						<List>
							<ListItem disablePadding>
				            <ListItemButton sx={{padding:0}}>

				              <ListItemIcon sx={{padding:0, width: 35, height: 35, }}>
				                <img src={stack} />
				              </ListItemIcon>

				              <ListItemText>
				              	<Typography sx={{fontSize:'20px', padding:0, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'black'}}>
					              	Upcoming Task - Create a campaign for designers due on 02/04/2023.
					            </Typography>
				              </ListItemText>
				            
				            </ListItemButton>
				          </ListItem>
						</List>
					</Grid>


				</Grid>


			</Grid>

		</Grid>

		
)}

export default Stat;

import React from 'react';

// Images
import tup from './tup.png'

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
import Container from '@mui/material/Container';


// Charts
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const colors = ['#C2ECC1', '#1F1F1F', '#C5C7F6']

const legend = ['Connections', 'Follows', 'Connect Invites']

const data = [
  {
    name: 'Connections',
    count: 440,
    fill: '#C2ECC1',
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: 'Follows',
    count: 290,
    fill: '#1F1F1F',
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: 'Connect Invites',
    count: 760,
    fill: '#C5C7F6',
    // pv: 9800,
    // amt: 2290,
  },
];



const DashArea = () => {
	return (


	<div style={{backgroundColor: '#F8F8F8'}}>


		<Grid container direction='column' spacing={5} >
			
			<Grid item xs={3} sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal'}}>

				<h1 style={{paddingLeft: '60px'}}>Dashboard</h1>

			</Grid>


			{/*3 Stats Section*/}
			<Grid item xs={4} sx={{padding: 0, marginTop:3}}>


				{/*3 Stats Section*/}
				<Grid container spacing={4} sx={{paddingLeft:4}} rowSpacing={1}>

					{/*Section 1*/}
					<Grid item xs={12} sx={{paddingBottom: 0}}>

						<p style={{marginBottom: 5, color:'#94979A', fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}}>
							Connections
						</p>
						
						<List sx={{padding:0}}>
				         	
				         	
			         		<ListItem disablePadding sx={{padding:0}}>
					            <ListItemButton sx={{padding:0}}>


						              <ListItemText>
						              	<Typography sx={{fontSize:'28px',padding:0, fontFamily: 'Rubik', fontWeight:400, fontStyle:'normal', color:'black', lineHeight: '25px'}}>
							              	2632
							            </Typography>
						              </ListItemText>


						              {/*Green Card*/}
						              <Card sx={{marginRight: 2, backgroundColor:'#DDF6DE', width: '69px', height: '28px', padding: 0}}>
					      
									      <List sx={{padding:0}}>
						         	
						         	
							         		<ListItem disablePadding>
									            <ListItemButton sx={{padding:0}}>

										              <ListItemIcon sx={{width: 16, height: 16, minWidth: 20, marginLeft:1}}>
										                <img src={tup} />
										              </ListItemIcon>

										            <ListItemText>
										              	<Typography sx={{fontSize:'16px', fontFamily: 'Sulpher Point', fontWeight:700, fontStyle:'normal', color:'#608662', lineHeight: '16.49px'}}>
											              	56%
											            </Typography>
										            </ListItemText>

								              
								            
							            		</ListItemButton>
					          				</ListItem>

						    			  </List>
							    

							  		  </Card>
				            
				            </ListItemButton>
				          </ListItem>

				          <Divider sx={{paddingTop: 3, marginRight: 2}} />

				    	</List>

					</Grid>

					{/*Section 2*/}
					<Grid item xs={12} sx={{paddingBottom: 0}}>

						<p style={{marginBottom: 5, color:'#94979A', fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}}>
							Followers
						</p>
						
						<List sx={{padding:0}}>
				         	
				         	
			         		<ListItem disablePadding>
					            <ListItemButton sx={{padding:0}}>


						              <ListItemText>
						              	<Typography sx={{fontSize:'28px',padding:0, fontFamily: 'Rubik', fontWeight:400, fontStyle:'normal', color:'black', lineHeight: '25px'}}>
							              	2667
							            </Typography>
						              </ListItemText>


						              {/*Green Card*/}
						              <Card sx={{marginRight: 2, backgroundColor:'#DDF6DE', width: '69px', height: '28px', padding: 0}}>
					      
									      <List sx={{padding:0}}>
						         	
						         	
							         		<ListItem disablePadding>
									            <ListItemButton sx={{padding:0}}>

										              <ListItemIcon sx={{width: 16, height: 16, minWidth: 20, marginLeft:1}}>
										                <img src={tup} />
										              </ListItemIcon>

										            <ListItemText>
										              	<Typography sx={{fontSize:'16px', fontFamily: 'Sulpher Point', fontWeight:700, fontStyle:'normal', color:'#608662', lineHeight: '16.49px'}}>
											              	0%
											            </Typography>
										            </ListItemText>

								              
								            
							            		</ListItemButton>
					          				</ListItem>

						    			  </List>
							    

							  		  </Card>
				            
				            </ListItemButton>
				          </ListItem>

				          <Divider sx={{paddingTop: 3, marginRight: 2}} />

				    	</List>

					</Grid>


					{/*Section 3*/}
					<Grid item xs={12} sx={{paddingBottom: 0}}>

						<p style={{marginBottom: 5, color:'#94979A', fontSize:'18px', fontFamily: 'Sulphur Point', fontWeight:400, fontStyle:'normal'}}>
							Connect Invites
						</p>
						
						<List sx={{padding:0}}>
				         	
				         	
			         		<ListItem disablePadding>
					            <ListItemButton sx={{padding:0}}>


						              <ListItemText>
						              	<Typography sx={{fontSize:'28px',padding:0, fontFamily: 'Rubik', fontWeight:400, fontStyle:'normal', color:'black', lineHeight: '25px'}}>
							              	100
							            </Typography>
						              </ListItemText>


						              {/*Green Card*/}
						              <Card sx={{backgroundColor:'#DDF6DE', width: '69px', height: '28px', padding: 0, marginRight: 2}}>
					      
									      <List sx={{padding:0}}>
						         	
						         	
							         		<ListItem disablePadding>
									            <ListItemButton sx={{padding:0}}>

										              <ListItemIcon sx={{width: 16, height: 16, minWidth: 20, marginLeft:1}}>
										                <img src={tup} />
										              </ListItemIcon>

										            <ListItemText>
										              	<Typography sx={{fontSize:'16px', fontFamily: 'Sulpher Point', fontWeight:700, fontStyle:'normal', color:'#608662', lineHeight: '16.49px'}}>
											              	60%
											            </Typography>
										            </ListItemText>

								              
								            
							            		</ListItemButton>
					          				</ListItem>

						    			  </List>
							    

							  		  </Card>
				            
				            </ListItemButton>
				          </ListItem>

				    	</List>

					</Grid>



				</Grid>

			</Grid>

			

			{/*Charts Section*/}
			<Grid item xs={5} sx={{alignItems:"center", marginLeft: 5, marginTop: 10, paddingBottom: 13}}>

				
				<Container maxWidth="sm" sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal'}}>
			      

			        <BarChart width={360} height={360} data={data} >

			          <CartesianGrid strokeDasharray="3 3"/>
			          <YAxis />
			          <XAxis />
			          <Tooltip />
			          
			          <Bar dataKey="count" fill='fill' />
			          <Legend 
						  payload={
						    data.map(
						      (item, index) => ({
						        id: item.name,
						        type: "square",
						        value: `${item.name}`,
						        color: colors[index % colors.length]
						      })
						    )
						  }
						/>

			        </BarChart>
		        
		        </Container>
		    
			</Grid>		


		</Grid>

	</div>
		


)}

export default DashArea;

// #F8F8F8
import React from 'react';
import PageHeader from '../../components/header/pageHeader';
import api from '../../services/api'
import MyLoader from '../skeleton';

import './styles.css'

class Members extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			members: [],
			loading: true
		}
	}

	async componentDidMount() {
    try {
      const response = await api.get('/orgs/aws/members')
      const logins = response.data.map(member => member.login)

      const members = []
      for (const login of logins) {
        const memberData = await api.get(`/users/${login}`)
        members.push(memberData)
      }

      this.setState({ members })
      this.setState({ loading: false })
    } catch (error){
      console.error(error)
    }
	}

	render() {
		const { members, loading } = this.state
		return (
			<div id="page-members" className="members-container">
				<PageHeader title="Membros" />
				{loading &&
					<div className="loader">
						<MyLoader />
					</div>
				}
				{!loading &&
					<main>
						<div className="list">
							{members.map(member => (
								<article className="member" key={member.data.id}>
									<img src={member.data.avatar_url}
										alt={member.data.name}>
									</img>
									<div id="identification">
										<div className="member-login">
											{
												member.data.login
													? <strong>{member.data.login}</strong>
													: <strong>Login não informado</strong>
											}
										</div>
										<div className="member-name">
											{
												member.data.name
													? <p>{member.data.name}</p>
													: <p>Nome não informado</p>
											}
										</div>
									</div>
									<div className="member-email">
										{
											member.data.email
												? <p>{member.data.email}</p>
												: <p>Email não informado</p>
										}
									</div>
									<div className="member-bio">
										{
											member.data.bio
												? <p>{member.data.bio}</p>
												: <p>Bio não informada</p>
										}
									</div>
								</article>
							))}
						</div>
					</main>
				}
			</div>
		)
	}
}

export default Members;
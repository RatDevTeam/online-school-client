import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AdminPage: React.FC = () => {
	const [selectedFile, setSelectedFile] = useState<Blob | any>(null);
	const [fileName, setFileName] = useState<string>('');
	const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [buttonText, setButtonText] = useState('Select your file first');

	useEffect(() => {
		if (!selectedFile) {
			return;
		}
		const reader = new FileReader();
		reader.onloadend = () => setPreview(reader.result);
		reader.readAsDataURL(selectedFile);
	}, [selectedFile]);
	const onFileSelected = (event: any) => {
		if (event.target.files[0]) {
			setSelectedFile(event.target.files[0]);
			setFileName(event.target.files[0].name);
			setIsDisabled(false); // Enabling upload button
			setButtonText("Let's upload this!");
		}
	};

	const handleFileUpload = (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		setIsDisabled(true);
		setButtonText("Wait we're uploading your file...");

		if (selectedFile) {
			const fileData = new FormData();
			fileData.append(
				'image',
				selectedFile,
				`${Date.now()}-${selectedFile.name}`
			);
			axios
				.post('/upload/', fileData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then((res) => {
					setIsLoading(false);
					setIsSuccess(true);
					return res;
				})
				.catch((err) => {
					setIsLoading(false);
					setIsError(true);
					setFileName('');
					console.log(err);
					setTimeout(() => {
						setIsError(false);
						setButtonText('Select your file first');
					}, 3000);
				});
		}
	};
	return (
		<form onSubmit={(e) => handleFileUpload(e)}>
			<div>
				<div>
					{isLoading ? (
						<div>Загрузка</div>
					) : (
						<div>
							{isError || isSuccess ? (
								<>
									<div>{isError}</div>
									<div>{isSuccess}</div>
								</>
							) : (
								<div>
									{preview ? (
										<div>
											<img
												src={preview.toString() || '#'}
												alt="Preview of the file to be uploaded"
											/>
										</div>
									) : (
										<div>upload</div>
									)}
									<input type="file" onChange={(e) => onFileSelected(e)} />
								</div>
							)}
						</div>
					)}
				</div>
				{isError || isSuccess ? (
					<p className={isSuccess ? 'success' : 'error'}>
						{isSuccess ? 'Upload successful!' : 'Something went wrong ...'}
					</p>
				) : (
					<p className="filename">{fileName || 'No file selected yet'}</p>
				)}
			</div>

			<button type="submit" tabIndex={0}>
				{buttonText}
			</button>
		</form>
	);
};
export default AdminPage;
